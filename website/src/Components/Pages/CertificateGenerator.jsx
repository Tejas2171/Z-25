import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import * as fontkit from 'fontkit';



const CertificateGenerator = () => {
  const [bibNumber, setBibNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Participant data maps
  const participantMaps = {
    'Runners': new Map([['30001', 'Jayesh Gharade'],
      ['123456789','Adhiraj'],
      
      ['1234567890','Mahaaksh'],
      ['30004', 'Maithili Joshi']])
  };

  const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  };

  const generatePDF = async (name, distance) => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Fetching PDF template...');
      const response = await fetch('/3km.pdf').catch(err => {
        console.error('PDF Fetch Error:', err);
        setError('Failed to fetch PDF template.');
        throw err;
      });
      const existingPdfBytes = await response.arrayBuffer();
  
      console.log('Fetching font...');
      const fontResponse = await fetch('/cert.ttf').catch(err => {
        console.error('Font Fetch Error:', err);
        setError('Failed to fetch font.');
        throw err;
      });
      const fontBytes = await fontResponse.arrayBuffer();
  
      console.log('Loading PDF document...');
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      pdfDoc.registerFontkit(fontkit);
  
      console.log('Embedding font...');
      const customFont = await pdfDoc.embedFont(fontBytes);
  
      const [firstPage] = pdfDoc.getPages();
      const fontSize = 38;
      // const xPosition = 100; // Use fixed value for testing
  
      console.log('Drawing text...');
      firstPage.drawText(name, {
        x: 450,
        y: 450,
        size: fontSize,
        font: customFont,
        color: rgb(0.2, 0.2, 0.6),
      });
  
      console.log('Saving PDF...');
      const pdfBytes = await pdfDoc.save();
      const file = new File(
        [pdfBytes],
        `marathon_certificate_${distance}.pdf`,
        { type: 'application/pdf;charset=utf-8' }
      );
      saveAs(file);
  
      setBibNumber('');
    } catch (err) {
      setError('Failed to generate certificate. Please try again.');
      console.error('Detailed Error:', err);
    } finally {
      setLoading(false);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedBib = bibNumber.trim();

    // Check which distance category the BIB belongs to
    for (const [distance, map] of Object.entries(participantMaps)) {
      if (map.has(trimmedBib)) {
        const participantName = map.get(trimmedBib);
        await generatePDF(participantName, distance);
        return;
      }
    }

    setError('Invalid BIB number. Please check and try again.');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Marathon Certificate Generator
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={bibNumber}
            onChange={(e) => setBibNumber(e.target.value)}
            placeholder="Enter BIB Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading || !bibNumber.trim()}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Certificate...
            </span>
          ) : (
            'Generate Certificate'
          )}
        </button>

        {error && (
          <div className="text-red-500 text-sm text-center mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default CertificateGenerator;