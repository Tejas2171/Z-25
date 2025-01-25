import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import * as fontkit from 'fontkit';
import './CertificateGenerator.css';

const CertificateGenerator = () => {
  const [bibNumber, setBibNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [finishTime, setFinishTime] = useState(''); // State for finish time message

  // Map of participant data
  // const participantMaps = new Map([
  //   ['3241', { name: 'Parth Doshi', time: '00:32:15' }],
  //   ['3213', { name: 'Vinit Chaudhari', time: '00:29:45' }],
  //   ['3278', { name: 'Samruddhi Bodkhe', time: '00:31:30' }],
  //   ['3281', { name: 'Chirag Gujrathi' }],
  // ]);

  const participantMaps = {
    'Runners': new Map([['3241', 'Parth Doshi'],
      ['3213', 'Vinit Chaudhari'],
      ['3278', 'Samruddhi Bodkhe'],
      ['3281', 'Chirag Gujrathi'],
      ['3194', 'Swagatika'],
      ['3009', 'Mauli Dhaygude'],
      ['3005', 'Mauli Satpute'],
      ['3041', 'Harshad Pendhar'],
      [' ', 'Rohit Naikwade'],
      ['3065', 'Sanchit Jadhav'],
      ['3126', 'Gauri Kale'],
      ['3148', 'Payal Kotkar'],
      ['3048', 'Aditya Kokate'],
      ['3345', 'Shreya Waghmare'],
      ['3124', 'Arya Kulkarni'],
      ['3341', 'Shravani Kalmegh'],
      ['3158', 'Harshal Kokate'],
      [' ', 'Pravin wadekar'],
      ['3012', 'Sujal Dhawade'],
      ['3077', 'Pranav Pande'],
      ['3348', 'Avadhoot Sonavane'],
      ['3223', 'Vedang Badgujar'],
      ['3286', 'Gauri Narke'],
      ['3226', 'Roshan Thakare'],
      ['3346', 'Sahil Sable'],
      ['3125', 'Kritin Gupta'],
      ['3157', 'Rosumi Motewar'],
      ['3121', 'Yash Raikwar'],
      ['3133', 'Varad Patil'],
      ['3149', 'Aditya Surve'],
      ['3137', 'Soham Bingewar'],
      ['3177', 'Prem Dupargude'],
      ['3001', 'Sagar Mahale'],
      ['3317', 'Neha Bhagwat'],
      ['3102', 'Aditya Ingale'],
      ['3130', 'Siddhant Pimpale'],
      ['3146', 'Minir Moonis'],
      ['3202', 'Snigdha Verma'],
      ['3230', 'Shivshambhu Harbare'],
      ['3196', 'Yadnesh Shastri'],
      ['3104', 'Parth Yewale'],
      ['3200', 'Sujit Thorat'],
      ['3160', 'Aditya Yeole'],
      ['3064', 'Udyansinh Gavali'],
      ['3288', 'Shivani Birdar'],
      ['3120', 'Sofiya Rukadikar'],
      ['3116', 'Omkar Kumbhar'],
      ['3040', 'Mahesh Kalshetty'],
      ['3036', 'Sagar Kalshetty'],
      ['3052', 'Vinod Kshirsagar'],
      [' ', 'Suyog Bhokare'],
      ['3013', 'Gauri Yashwan'],
      ['3176', 'Renukaaa Pande'],
      ['3174', 'Radhika Parkhi'],
      ['3184', 'Anuja Raikwar'],
      ['vaibhav', 'Vaibhav Kamble'],
      ['3017', 'Pranita Khilare'],
      ['3180', 'Prathamnesh Patil'],
      ['3045', 'Ayaan Ali'],
      ['3085', 'Shaunak Deshpande'],
      [' ', 'Om Shelke'],
      ['3314', 'Pranjal Kumavat'],
      ['3318', 'Shreya Mahajan'],
      ['3289', 'Prachi Deole'],
      ['3285', 'Palak Chandankhede'],
      ['3273', 'Saumya dere'],
      ['3330', 'Pushkaraj Gaikwad'],
      ['3073', 'Jayesh Borude'],
      ['3234', 'Sneha Jagdale'],
      ['3057', 'Prevanshu Salunkhe'],
      ['3205', 'Vaishnavi Dhumal'],
      ['3238', 'Nirzara Shinde'],
      ['3246', 'Juee Salunkhe'],
      [' ', 'Sanika katkar'],
      ['3258', 'Sakshi Hivare'],
      ['3242', 'Saee Shinde'],
      ['3250', 'Shariva Gaikwad'],
      ['3262', 'Sonal Tikate'],
      ['3282', 'Chinmayee Alandkar'],
      [' ', 'Priya kesharwani'],
      ['3154', 'Shravani Bagde'],
      ['3298', 'Semmihan Deshmukh'],
      ['3306', 'Manthan Vyawhare'],
      ['3254', 'Sanika Kedar'],
      ['3310', 'Siddhant Ambore'],
      ['3132', 'Paonam Bhagure'],
      ['3322', 'Shrutika Chavan'],
      ['3030', 'Aditi Pore'],
      ['3326', 'Shreya Shevkar'],
      ['3302', 'Jayesh Wankhade'],
      ['3024', 'Jayesh Chaudhari'],
      ['3334', 'Tanushka Gulhane'],
      ['3156', 'Shraddha More'],
      ['3206', 'Karmanya Raina'],
      ['3007', 'Rupali Patil'],
      ['3003', 'Ravindra Patil'],
      ['3118', 'Tushar Mane'],
      ['3185', 'Yash gadge'],
      ['3186', 'Ankuh Lad'],
      ['3020', 'Mayank Ghosh'],
      ['3114', 'Pranali'],
      ['3114', 'Shubham Nagepurkar'],
      ['3332', 'Aarohi Mohite'],
      ['3110', 'Ajay Mohite'],
      ['3170', 'Mahesh Dandage'],
      ['3033', 'Akshay chavhan'],
      ['3025', 'Rijwan Jinedi'],
      ['3029', 'Shubham dandge'],
      ['3049', 'Malhar Dixit'],
      ['3265', 'Satish Chavan'],
      ['3061', 'Bramha Lambate'],
      ['3084', 'Shivam More'],
      ['3333', 'Suyash Joshi'],
      ['3346', 'Soham Patil'],
      ['3210', 'Samarth Mohite'],
      ['3338', 'Rishikesh Bhosale'],
      ['3245', 'N T Panchal'],
      ['3329', 'Raghav Kulkarni'],
      ['3349', 'Parth Khose'],
      ['3253', 'Shreyas Patil'],
      ['3141', 'Aditya KhotPatil'],
      ['3222', 'Shivam Javir'],
      ['3214', 'Parth Bharde'],
      [' ', 'Prajval Madavi'],
      ['3169', 'Ramij Naikwadi'],
      ['3109', 'Gargi Gamote'],
      ['3294', 'Kaustubh sawant'],
      ['3097', 'Vaishnavi Patil'],
      ['3053', 'Mahesh Desai'],
      ['3301', 'Nitya Kalyani'],
      ['3117', 'Diksha Kshirsagar'],
      ['3145', 'Aftab Shaikh'],
      ['3350', 'Sakshi Nadgaundi'],
      ['3165', 'Amol khairnar'],
      ['3305', 'Sujatha Humbir'],
      ['3321', 'Ishwari Joshi'],
      [' ', 'Manoj Hanbir'],
      ['3325', 'Anupam Navare'],
      ['3028', 'Sushila gabhane'],
      ['3093', 'Nisarg wath'],
      ['3136', 'Manashree Dakve'],
      ['3087', 'Harpal Singh'],
      ['3270', 'Arnish Suryawanshi'],
      ['3266', 'Vedant Magar'],
      ['3274', 'Ayush Palkar'],
      [' ', 'Chaitral Wadate'],
      ['3313', 'Sharvil Jawale'],
      ['3309', 'Kishore Jawale'],
      ['3198', 'Premlata Chawala'],
      ['3122', 'Janhavi A'],
      ['3257', 'Prasad bhoir'],
      ['3277', 'Archana bhoir'],
      ['3182', 'Ruxshin Taraporewalla'],
      ['3261', 'Aryan Bhoir'],
      ['3140', 'Ashwini Jadhao'],
      ['3089', 'Pallavi Gabhane'],
      ['3021', 'Atharva Halbe'],
      ['3129', 'Sayrabanu Sayyad'],
      ['3128', 'Anjall Talathi'],
      ['5032', 'Prathamesh Deshmukh'],
      ['5031', 'Nikhil Jain'],
      ['5029','Pandurang Phale'],
      ['5051','Abhijit Pakhare'],
      ['5052','Mayur Yadav'],
      ['5042','Nilesh Shende'],
      ['5043','Arun Surve'],
      ['5044','Sandeep MarathE'],
      ['5044','Sachin Gore'],
      ['5045','Sachin Gore'],
      ['5046','Shravani Shintre'],
      ['5047','Santosh Khutwad '],
      ['5048','Saurabh Dhamale'],
      ['5049','Mrunmayee Surve'],
      ['5050','Yogesh Ghodake'],
      ['5033','Pankaj Boir'],
      ['5005','Meghana N'],
      ['5004', 'Pranav Lakhkar'],
      ['suhani', 'Suhani Kolhatkar'],
      ['5013','Krushna Jadhav'],
      ['5014','Vikas Salunkhe'],
      ['5015','Balasaheb Mule'],
      ['5016','Janaardan Shivankar'],
      ['5017','Bapu Chate'],
      ['5018','Suhas Thorat'],
      ['5002','Deeraj Gawade'],
      ['5026','Sushupti Khanapure'],
      ['5027','Rajeshre Jagavkaar'],
      ['5020','Vishal Bagdi'],
      ['5024','Dr Pravin Pargaonkar'],
      ['5023','Adhinath Solanke'],
      ['5034','Siddhesh Panajkar'],    
      ['5035','Pratik Choudhari'],  
      ['5055','Avinashalok Bhasme'],
      ['5012','Varun Ghegade'],
      ['5041','Manas Ghadge'],
      ['5028','Amruta Agrawal'],
      ['5006','Ankita Waghmare'], 
      ['5009','Vikas Hulgunde'],
      ['5001','Yuvraj Raikar'],
      ['5010','Aniket Kuchekar'],
      ['5025','Yash ahire'],
      ['5008','Anisha Mulani'],
      ['5037','Ganesh Narke'],
      ['5019','Sanket Kulkarni'],
      ['3189','Pranav Singh'],
      ['3209','Tanishka'],
      ['3036','Pradnesh Doshi'],
      ['3337','Swarnika Karale '],
      ['3296','Appasaheb Bhosale'],
      ['3292','Kirti Bhosale'],
      ['3237','Rahul Kotnis'],
      ['3161','Awissar Deol'],
      ['3081','Shrinivas Kakade'], 
      ['3069','Aditi Mujumale'],
      ['3173','Harshada Pawar'],
      ['3181','Dhanshree Pawar'],
      ['3188','Abhishek Kulunge'],
      ['3297','Kushal Sonawane'],
      ['3249','Ishita Gaikwad'],
      ['3221','Ishaan Singh'],
      ['3101','Kedar Kulkarni'],
      ['3153','Mutka Lad'],
      ['3186','Harsha Peesapaty'],
      ['3229','Ananya Mallik'],
      ['3197','Kajal Chavan'],
      ['3105','Vipul Ghodake'],
      ['3152','Yug Jain'],
      ['3168','Dattataya Kulunge'],
      ['3192','Vinit Talathi'],
      ['3144','Shrikant Jadhao'],
      ['3113','Mihheeka Khair'],
      ['3108','Jatin rane'],
      ['3164','Snehal Kale'],
      ['3225','Arun Mallik'],
      ['3044','Zaid Attar'],
      ['3269','Shriapad Badiger'],
      ['3016','Chinmay Sawant'],
      ['3032','Siddharth Gaikwad'],
      ['3324','Pramod Wadekar'],
      ['3112','Shivani Bhore'],
      ['3172','Isha Nabaria'],
      ['3008','Yogesh Bochare'],
      ['3193','Chaitnya Kshirsagar'],
      ['3328','Prathamesh'],
      ['3068','Suyash Borate'],
      ['3278', 'Parmita Bombarde'],
      ['30001', 'Jayesh Gharade'],
      ['123456789','Adhiraj'],
      ['F5019','shivam waghe'],
      ['F5075','manali gosavi'],
      ['F5038','Yash Bhapkar'],
      ['F5016','Thirupathi Jayaraj'],
      ['F5001','sanjay joshi'],
      ['F5011','abhay lamb'],
      ['F5085','mahabir mahto'],
      ['F5086','annu ray'],
      ['F5131','Kshitij Goswami'],
      ['F5039','Piyush pawar'],
      ['F5012','Santosh Chandrakari'],
      ['F5006','vaibhav nandurdikar'],
      ['F5005','ananda kusmude'],
      ['F5091','arjun'],
      ['F5090','ankit garg'],
      ['F5084','aryan'],
      ['F5110','swarup sutar'],
      ['F5111','swajeet sutar'],
      ['F5015','akshay athaley'],
      ['F5021','kartik mandal'],
      ['F5017','rayhan sayad'],
      ['F5087','shivam aher'],
      ['F5026','saee tilak'],
      ['F5112','gourav powar'],
      ['F5020','kirti bhatia'],
      ['F5035','dipak kumbhar'],
      ['F5106','darsh agarwal'],
      ['F5034','tejas dharne'],
      ['F5037','shailesh sonawane'],
      ['F5007','samiksha khare'],
      ['F5040','ashwin shinde'],
      ['F5074','shivam roy'],
      ['F5076','sanskriti hegade'],
      ['F5025','shekhar javir'],
      ['F5082','rishikesh patil'],
      ['F5078','radhika rahinj'],
      ['F5014','prathamesh dasarwar'],
      ['F5009','subodh khasnis'],
      ['F5010','mahesh bhosale'],
      ['F5081','saurabh raut'],
      ['F5107','namrata kashid'],
      ['F5100','sujal katake'],
      ['F5093','tejas gaikwad'],
      ['F5096','samartha bhople'],
      ['F5094','pramod gaikwad'],
      ['F5022','amruta mandave'],
      ['F5083','nimish marathe'],
      ['F5013','mangesh tatepatil'],
      ['F5003','om jadhav'],
      ['F5002','suraj sonune'],
      ['F5004','amey dhenge'],
      ['F5108','shrushti warangule'],
      ['F5079','soaham panse'],
      ['F5080','prakash chitnis'],
      ['F5018','megh lahoti'],
      ['F5023','archana gandhi'],
        ['F5024','vaishali bhagwat'],
        ['F5027','pravin wadekar'],
        ['F5036','ishaan suryavanshi'],
        ['F5028','ranjankumar sharma'],
        ['F5029','sanjaykumar sharma'],
        ['F5030','rudra sharma'],
        ['F5031','roma sharma'],
        ['F5032','nilesh sharma'],
        ['F5033','mayur mandale'],
        ['F5077','grandsingh'],
        ['F5088','sanyogita patil'],
        ['F5089','aryan bhajane'],
        ['F5092','rushikesh rajput'],
        ['F5095','prithvirajsingh rajput'],
        ['F5097','suhani'],
      ['1234567890','Mahaaksh'],
      ['30004', 'Maithili Joshi'],
      ['5053', 'Rudraksh Shinde'],
      ['5021', 'Kaushik Narang'],
      ['5022', 'Khushbu Jethwani'],
      ['5036', 'Balaji Kale'],
      ['5039', 'Kaiwalya Pingle'],
      ['5040', 'Anvayee Pingle'],
      ['5054', 'Suraj Sidankar'],
      ['5070', 'Torvna Porfani'],
      ['3072', 'Ritesh Patil'],
      ['3080', 'Gaurav Wayal'],
      ['3092', 'Damini Patil'],
      ['3004', 'Pavan Palaskar'],
      ['3088', 'Lokesh Naik'],
      ['3056', 'Sumit Korde'],
      ['3100', 'Aditya Gajbhiye'],
      ['3204', 'Mahind Salve'],
      ['3052', 'Maruti Zore'],
      ['3344', 'Abhijit Jamble'],
      ['3340', 'Soham Dhurve'],
      ['5105', 'Kalim Khan'],
      ['3348', 'Sachin Korde'],
      ['10050','Raghavendra Godase'],
      ['10210','Varad Bagal'],
      ['10036','Sanjay Pandit'],
      ['10019','Pravin Rasal'],
      ['10220','Ipsy Chhotray'],
      ['10100','Gaurav Gabhane'],
      ['10016','Ca.Rajendra Gujarathi'],
      ['10021','Hrishikesh Kamat'],
      ['','Kunal Jadhav'],
      ['10018','Mahesh Kadu'],
      ['10057','Amogh Girgaonkar'],
      ['10053','Rani Pereira'],
      ['10009','Vivek Pandey'],
      ['10218','Abhishek Mohanty'],
      ['10096','Sanjay Shirshpad'],
      ['10023','Yash Jadhav'],
      ['10025','Akhil Iyer'],
      ['10052','Deepak Londhe'],
      ['10022','Mandar Shintre'],
      ['10013','Pranshu Sakalle'],
      ['10024','Sangram Polekar'],
      ['10056','Aditya Godbole'],
      ['10201','Swapnil Kale'],
      ['10028','Prashant Kulkarni'],
      ['10026','Amol Amune'],
      ['','Sagar Kharpudikar'],
      ['10010','Akshay Chaudhari'],
      ['10046','Tanish Desai'],
      ['10012','Sachin Chavan'],
      ['10033','Kalyani Shinde'],
      ['10020','Vishnu Gawali'],
      ['10205','Vaishali Gaurav'],
      ['10027','Rajendra Muthe'],
      ['10197','Pradeep Parate'],
      ['10196','Sanjay Shirsad'],
      ['10219','Anil Kumar'],
      ['10077','Vaidehi Srivastava'],
      ['10206','Samrat Phadnis'],
      ['10063','Dipanshu Mohanty'],
      ['10207','Mangesh Kolapkar'],
      ['10054','Sumit Jadhav'],
      ['10208','Janhvai Patil'],
      ['10062','Dilip Deepak'],
      ['','Rajendrakumar Balasaheb'],
      ['10034','Rakesh Mehta'],
      ['10032','Rohit Bhatia'],
      ['10060','Ninad Kawde'],
      ['10209','Anil Sawale'],
      ['10076','Pankaj Kumar'],
      ['','Santosh Bhoyar'],
      ['10059','Sadhna Dhar Tikoo'],
      ['10061','Fatema Moiz'],
      ['10003','Vaishnavi Andhare'],
      ['10007','Rupali Desai'],
      ['10001','Prabhakar Jadhav'],
      ['10058','Zainab Jambughodawala'],
      ['10030','Shailja Kurnar'],
      ['10051','Parth Tungatkar'],
      ['10203','Dhiraj Pawar'],
      ['10040','Nitika Sharma'],
      ['10039','Ishwari Joshi'],
      ['10038','Sakshi Goel'],
      ['10037','Sandeep Patil'],
      ['10041','Jyoti Singh'],
      ['10049','Akansha Gaikwad'],
      ['10045','Roshni Deshmukh'],
      ['10224','Bhivaji Das'],
      ['10005','Vishal Bansode'],
      ['10004','Gayatri Chaudhari'],
      ['10015','Aayoush Jaggade'],
      ['10008','Padma Karande'],
      ['10042','Sanjay Powar'],
      ['10006','Avinash Mandhare'],
      ['10011','Rohit More'],
      ['10194','Shekhar Shinde'],
      ['10202','Harsh Mane'],
      ['10055','Atharva Nene'],
      ['10002','Swara Mahabal'],
      ['10029','Vishwas Suryawanshi'],
      ['10043','Ashish Sontakke'],
      ['10044','Pooja Khatwani'],
      ['10014','Harsh Modak'],
      ['10204','Vijay Kadam'],
      ['10017','Akash Patil'],
      ['10221','Suraj Bhusari'],
      ['10031','Manthan Varma'],
      ['10035','Shivam Bhagwat'],
      ['10047','Kamlesh Gandhi'],
      ['10191','Sunil Dhakane'],
      ['10192','Deepak Pawar'],
      ['10193','Atul Jamk'],
      ['10211','Krishna Pal'],
      ['ankush','Ankush Lad'],
      ['sagardahi','Sagar Dahiwale'],
      ['shivkak','Shivshankar Kakade'],
      ['10212','Shakuntaladevi']
    ])
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
      const response = await fetch('/3km1.pdf');
      const existingPdfBytes = await response.arrayBuffer();
  
      console.log('Fetching font...');
      const fontResponse = await fetch('/fonts/cert.ttf');
      const fontBytes = await fontResponse.arrayBuffer();
  
      console.log('Loading PDF document...');
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      pdfDoc.registerFontkit(fontkit);
  
      console.log('Embedding font...');
      const customFont = await pdfDoc.embedFont(fontBytes);
  
      const [firstPage] = pdfDoc.getPages();
      const fontSize = 38;
  
      console.log('Drawing text...');
      firstPage.drawText(name, {
        x: 150,
        y: 150,
        size: fontSize,
        font: customFont,
        color: rgb(0.2, 0.2, 0.6),
      });
  
      console.log('Saving PDF...');
      const pdfBytes = await pdfDoc.save();
      const file = new File([pdfBytes], `marathon_certificate_${distance}.pdf`, { type: 'application/pdf;charset=utf-8' });
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

    // Check for matching BIB ID in the participantMap
    const participant = participantMaps.get(trimmedBib);

    if (participant) {
      const { name, time } = participant; // Get participant name and time
      if (time) {
        setFinishTime(`Finish Time: ${time}`); // Set the finish time if available
      } else {
        setFinishTime('You were not timed for the Event'); // If no time, show this message
      }
      await generatePDF(name, '3km'); // Use appropriate distance
    } else {
      setError('Invalid BIB number. Please check and try again.');
    }
  };

  return (
    <body className='certificate-generator-page'>
      <div className="smlgmain runathon-font ">RUNATHON</div>
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

          {finishTime && (
            <div className="text-green-500 text-sm text-center mt-2">
              {finishTime}
            </div>
          )}

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
