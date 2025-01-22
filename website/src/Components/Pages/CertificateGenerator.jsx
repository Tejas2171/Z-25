import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import * as fontkit from 'fontkit';
import "./CertificateGenerator.css";


const CertificateGenerator = () => {
  const [bibNumber, setBibNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Participant data maps
  const participantMaps = {
    'Runners': new Map([['30001', 'Jayesh Gharade'],
      ['123456789','Adhiraj'],
      ['5019','shivam waghe'],
      ['5075','manali gosavi'],
      ['5038','Yash Bhapkar'],
      ['5016','Thirupathi Jayaraj'],
      ['5001','sanjay joshi'],
      ['5011','abhay lamb'],
      ['5085','mahabir mahto'],
      ['5086','annu ray'],
      ['5131','Kshitij Goswami'],
      ['5039','Piyush pawar'],
      ['5012','Santosh Chandrakari'],
      ['5006','vaibhav nandurdikar'],
      ['5005','ananda kusmude'],
      ['5091','arjun'],
      ['5090','ankit garg'],
      ['5084','aryan'],
      ['5110','swarup sutar'],
      ['5111','swajeet sutar'],
      ['5015','akshay athaley'],
      ['5021','kartik mandal'],
      ['5017','rayhan sayad'],
      ['5087','shivam aher'],
      ['5026','saee tilak'],
      ['5112','gourav powar'],
      ['5020','kirti bhatia'],
      ['5035','dipak kumbhar'],
      ['5106','darsh agarwal'],
      ['5034','tejas dharne'],
      ['5037','shailesh sonawane'],
      ['5007','samiksha khare'],
      ['5040','ashwin shinde'],
      ['5074','shivam roy'],
      ['5076','sanskriti hegade'],
      ['5025','shekhar javir'],
      ['5082','rishikesh patil'],
      ['5078','radhika rahinj'],
      ['5014','prathamesh dasarwar'],
      ['5009','subodh khasnis'],
      ['5010','mahesh bhosale'],
      ['5081','saurabh raut'],
      ['5107','namrata kashid'],
      ['5100','sujal katake'],
      ['5093','tejas gaikwad'],
      ['5096','samartha bhople'],
      ['5094','pramod gaikwad'],
      ['5022','amruta mandave'],
      ['5083','nimish marathe'],
      ['5013','mangesh tatepatil'],
      ['5003','om jadhav'],
      ['5002','suraj sonune'],
      ['5004','amey dhenge'],
      ['5108','shrushti warangule'],
      ['5079','soaham panse'],
      ['5080','prakash chitnis'],
      ['5018','megh lahoti'],
      ['5023','archana gandhi'],
      ['5024','vaishali bhagwat'],
      ['5027','pravin wadekar'],
      ['5036','ishaan suryavanshi'],
      ['5028','ranjankumar sharma'],
      ['5029','sanjaykumar sharma'],
      ['5030','rudra sharma'],
      ['5031','roma sharma'],
      ['5032','nilesh sharma'],
      ['5033','mayur mandale'],
      ['5077','grandsingh'],
      ['5088','sanyogita patil'],
      ['5089','aryan bhajane'],
      ['5092','rushikesh rajput'],
      ['5095','prithvirajsingh rajput'],
      ['5097','suhani'],
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
    <body className='certificate-generator-page'>
      <div className="smlgmain runathon-font ">RUNATHON
      </div>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 bib-block">
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
            className="text-white w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading || !bibNumber.trim()}
          className={`w-full py-2 px-4 rounded-md text-white font-medium submit-button
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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
    </body>
  );
};

export default CertificateGenerator;