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

  const participantMaps = 
          new Map([
      // ['3241', 'Parth Doshi'],
    //   ['3213', 'Vinit Chaudhari'],
    //   ['3278', 'Samruddhi Bodkhe'],
    //   ['3281', 'Chirag Gujrathi'],
    //   ['3194', 'Swagatika'],
    //   ['3009', 'Mauli Dhaygude'],
    //   ['3005', 'Mauli Satpute'],
    //   ['3041', 'Harshad Pendhar'],
    //   [' ', 'Rohit Naikwade'],
    //   ['3065', 'Sanchit Jadhav'],
    //   ['3126', 'Gauri Kale'],
    //   ['3148', 'Payal Kotkar'],
    //   ['3048', 'Aditya Kokate'],
    //   ['3345', 'Shreya Waghmare'],
    //   ['3124', 'Arya Kulkarni'],
    //   ['3341', 'Shravani Kalmegh'],
    //   ['3158', 'Harshal Kokate'],
    //   [' ', 'Pravin wadekar'],
    //   ['3012', 'Sujal Dhawade'],
    //   ['3077', 'Pranav Pande'],
    //   ['3348', 'Avadhoot Sonavane'],
    //   ['3223', 'Vedang Badgujar'],
    //   ['3286', 'Gauri Narke'],
    //   ['3226', 'Roshan Thakare'],
    //   ['3346', 'Sahil Sable'],
    //   ['3125', 'Kritin Gupta'],
    //   ['3157', 'Rosumi Motewar'],
    //   ['3121', 'Yash Raikwar'],
    //   ['3133', 'Varad Patil'],
    //   ['3149', 'Aditya Surve'],
    //   ['3137', 'Soham Bingewar'],
    //   ['3177', 'Prem Dupargude'],
    //   ['3001', 'Sagar Mahale'],
    //   ['3317', 'Neha Bhagwat'],
    //   ['3102', 'Aditya Ingale'],
    //   ['3130', 'Siddhant Pimpale'],
    //   ['3146', 'Minir Moonis'],
    //   ['3202', 'Snigdha Verma'],
    //   ['3230', 'Shivshambhu Harbare'],
    //   ['3196', 'Yadnesh Shastri'],
    //   ['3104', 'Parth Yewale'],
    //   ['3200', 'Sujit Thorat'],
    //   ['3160', 'Aditya Yeole'],
    //   ['3064', 'Udyansinh Gavali'],
    //   ['3288', 'Shivani Birdar'],
    //   ['3120', 'Sofiya Rukadikar'],
    //   ['3116', 'Omkar Kumbhar'],
    //   ['3040', 'Mahesh Kalshetty'],
    //   ['3036', 'Sagar Kalshetty'],
    //   ['3052', 'Vinod Kshirsagar'],
    //   [' ', 'Suyog Bhokare'],
    //   ['3013', 'Gauri Yashwan'],
    //   ['3176', 'Renukaaa Pande'],
    //   ['3174', 'Radhika Parkhi'],
    //   ['3184', 'Anuja Raikwar'],
    //   ['vaibhav', 'Vaibhav Kamble'],
    //   ['3017', 'Pranita Khilare'],
    //   ['3180', 'Prathamnesh Patil'],
    //   ['3045', 'Ayaan Ali'],
    //   ['3085', 'Shaunak Deshpande'],
    //   [' ', 'Om Shelke'],
    //   ['3314', 'Pranjal Kumavat'],
    //   ['3318', 'Shreya Mahajan'],
    //   ['3289', 'Prachi Deole'],
    //   ['3285', 'Palak Chandankhede'],
    //   ['3273', 'Saumya dere'],
    //   ['3330', 'Pushkaraj Gaikwad'],
    //   ['3073', 'Jayesh Borude'],
    //   ['3234', 'Sneha Jagdale'],
    //   ['3057', 'Prevanshu Salunkhe'],
    //   ['3205', 'Vaishnavi Dhumal'],
    //   ['3238', 'Nirzara Shinde'],
    //   ['3246', 'Juee Salunkhe'],
    //   [' ', 'Sanika katkar'],
    //   ['3258', 'Sakshi Hivare'],
    //   ['3242', 'Saee Shinde'],
    //   ['3250', 'Shariva Gaikwad'],
    //   ['3262', 'Sonal Tikate'],
    //   ['3282', 'Chinmayee Alandkar'],
    //   [' ', 'Priya kesharwani'],
    //   ['3154', 'Shravani Bagde'],
    //   ['3298', 'Semmihan Deshmukh'],
    //   ['3306', 'Manthan Vyawhare'],
    //   ['3254', 'Sanika Kedar'],
    //   ['3310', 'Siddhant Ambore'],
    //   ['3132', 'Paonam Bhagure'],
    //   ['3322', 'Shrutika Chavan'],
    //   ['3030', 'Aditi Pore'],
    //   ['3326', 'Shreya Shevkar'],
    //   ['3302', 'Jayesh Wankhade'],
    //   ['3024', 'Jayesh Chaudhari'],
    //   ['3334', 'Tanushka Gulhane'],
    //   ['3156', 'Shraddha More'],
    //   ['3206', 'Karmanya Raina'],
    //   ['3007', 'Rupali Patil'],
    //   ['3003', 'Ravindra Patil'],
    //   ['3118', 'Tushar Mane'],
    //   ['3185', 'Yash gadge'],
    //   ['3186', 'Ankuh Lad'],
    //   ['3020', 'Mayank Ghosh'],
    //   ['3114', 'Pranali'],
    //   ['3114', 'Shubham Nagepurkar'],
    //   ['3332', 'Aarohi Mohite'],
    //   ['3110', 'Ajay Mohite'],
    //   ['3170', 'Mahesh Dandage'],
    //   ['3033', 'Akshay chavhan'],
    //   ['3025', 'Rijwan Jinedi'],
    //   ['3029', 'Shubham dandge'],
    //   ['3049', 'Malhar Dixit'],
    //   ['3265', 'Satish Chavan'],
    //   ['3061', 'Bramha Lambate'],
    //   ['3084', 'Shivam More'],
    //   ['3333', 'Suyash Joshi'],
    //   ['3346', 'Soham Patil'],
    //   ['3210', 'Samarth Mohite'],
    //   ['3338', 'Rishikesh Bhosale'],
    //   ['3245', 'N T Panchal'],
    //   ['3329', 'Raghav Kulkarni'],
    //   ['3349', 'Parth Khose'],
    //   ['3253', 'Shreyas Patil'],
    //   ['3141', 'Aditya KhotPatil'],
    //   ['3222', 'Shivam Javir'],
    //   ['3214', 'Parth Bharde'],
    //   [' ', 'Prajval Madavi'],
    //   ['3169', 'Ramij Naikwadi'],
    //   ['3109', 'Gargi Gamote'],
    //   ['3294', 'Kaustubh sawant'],
    //   ['3097', 'Vaishnavi Patil'],
    //   ['3053', 'Mahesh Desai'],
    //   ['3301', 'Nitya Kalyani'],
    //   ['3117', 'Diksha Kshirsagar'],
    //   ['3145', 'Aftab Shaikh'],
    //   ['3350', 'Sakshi Nadgaundi'],
    //   ['3165', 'Amol khairnar'],
    //   ['3305', 'Sujatha Humbir'],
    //   ['3321', 'Ishwari Joshi'],
    //   [' ', 'Manoj Hanbir'],
    //   ['3325', 'Anupam Navare'],
    //   ['3028', 'Sushila gabhane'],
    //   ['3093', 'Nisarg wath'],
    //   ['3136', 'Manashree Dakve'],
    //   ['3087', 'Harpal Singh'],
    //   ['3270', 'Arnish Suryawanshi'],
    //   ['3266', 'Vedant Magar'],
    //   ['3274', 'Ayush Palkar'],
    //   [' ', 'Chaitral Wadate'],
    //   ['3313', 'Sharvil Jawale'],
    //   ['3309', 'Kishore Jawale'],
    //   ['3198', 'Premlata Chawala'],
    //   ['3122', 'Janhavi A'],
    //   ['3257', 'Prasad bhoir'],
    //   ['3277', 'Archana bhoir'],
    //   ['3182', 'Ruxshin Taraporewalla'],
    //   ['3261', 'Aryan Bhoir'],
    //   ['3140', 'Ashwini Jadhao'],
    //   ['3089', 'Pallavi Gabhane'],
    //   ['3021', 'Atharva Halbe'],
    //   ['3129', 'Sayrabanu Sayyad'],
    //   ['3128', 'Anjall Talathi'],
    ['3165', { name: 'Sakshi Nadgaundi' }],
    ['3065', { name: 'Sanchit Jadhav' }],
      ['5032', { name: 'Prathamesh Deshmukh', time: '00:38:00' }],
      ['5031', { name: 'Nikhil Jain', time: '00:36:00' }],
      ['5029',{ name: 'Pandurang Phale', time: '00:27:00' }],
      ['5051',{ name: 'Abhijit Pakhare', time: '00:34:00' }],
      ['5052',{ name: 'Mayur Yadav', time: '00:30:00' }],
      ['5042',{ name: 'Parth Doshi' }],
      //check
      ['5043',{ name: 'Arun Surve', time: '00:55:00' }],
      ['5044',{ name: 'Sandeep Marathe', time: '00:55:00' }],
      ['5045',{ name: 'Sachin Gore' }],
      ['5046',{ name: 'Shravani Shintre', time: '00:45:00' }],
      ['5047',{ name: 'Santosh Khutwad ' }],
      ['5048',{ name: 'Saurabh Dhamale' }],
      ['5049',{ name: 'Mrunmayee Surve', time: '00:55:00' }],
      ['5050',{ name: 'Yogesh Ghodake', time: '00:45:00' }],
      ['5033',{ name: 'Pankaj Boir', time: '00:27:00' }],
      ['5005',{ name: 'Meghana N', time: '00:51:00' }],
      ['5004', { name: 'Pranav Lakhkar', time: '01:10:00' }],
      ['suhani', {name :'Suhani Kolhatkar'}],
      ['5013',{ name: 'Krushna Jadhav', time: '00:32:00' }],
      ['5014',{ name: 'Vikas Salunkhe', time: '00:32:00' }],
      ['5015',{ name: 'Balasaheb Mule', time: '00:32:00' }],
      ['5016',{ name: 'Janaardan Shivankar', time: '00:50:00' }],
      ['5017',{ name: 'Bapu Chate', time: '00:35:00' }],
      ['5018',{ name: 'Suhas Thorat', time: '00:41:00' }],
      ['5002',{ name: 'Deeraj Gawade', time: '00:26:00' }],
      ['5026',{ name: 'Sushupti Khanapure', time: '00:47:00' }],
      ['5027',{ name: 'Rajeshre Jagavkaar', time: '00:51:00' }],
      ['5020',{ name: 'Vishal Bagdi', time: '00:28:00' }],
      ['5024',{ name: 'Dr Pravin Pargaonkar' }],
      ['5023',{ name: 'Adhinath Solanke', time: '00:27:00' }],
      ['5034',{ name: 'Siddhesh Panajkar', time: '00:47:00' }],    
      ['5035',{ name: 'Pratik Choudhari', time: '00:47:00' }],  
      ['5055',{ name: 'Avinashalok Bhasme' }],
      ['5012',{ name: 'Varun Ghegade' }],
      ['5041',{ name: 'Manas Ghadge', time: '00:46:00' }],
      ['5028',{ name: 'Amruta Agrawal', time: '00:52:00' }],
      ['5006',{ name: 'Ankita Waghmare' }], 
      ['5009',{ name: 'Vikas Hulgunde' }],
      ['5001',{ name: 'Yuvraj Raikar', time: '00:27:00' }],
      ['5010',{ name: 'Aniket Kuchekar', time: '00:32:00' }],
      ['5025',{ name: 'Yash ahire', time: '00:31:00' }],
      ['5008',{ name: 'Anisha Mulani' }],
      ['5037',{ name: 'Ganesh Narke', time: '00:43:00' }],
      ['5019',{ name: 'Sanket Kulkarni', time: '00:46:00' }],
      // ['3189','Pranav Singh'],
      // ['3209','Tanishka'],
      // ['3036','Pradnesh Doshi'],
      // ['3337','Swarnika Karale '],
      // ['3296','Appasaheb Bhosale'],
      // ['3292','Kirti Bhosale'],
      // ['3237','Rahul Kotnis'],
      // ['3161','Awissar Deol'],
      // ['3081','Shrinivas Kakade'], 
      // ['3069','Aditi Mujumale'],
      // ['3173','Harshada Pawar'],
      // ['3181','Dhanshree Pawar'],
      // ['3188','Abhishek Kulunge'],
      // ['3297','Kushal Sonawane'],
      // ['3249','Ishita Gaikwad'],
      // ['3221','Ishaan Singh'],
      // ['3101','Kedar Kulkarni'],
      // ['3153','Mutka Lad'],
      // ['3186','Harsha Peesapaty'],
      // ['3229','Ananya Mallik'],
      // ['3197','Kajal Chavan'],
      // ['3105','Vipul Ghodake'],
      // ['3152','Yug Jain'],
      // ['3168','Dattataya Kulunge'],
      // ['3192','Vinit Talathi'],
      // ['3144','Shrikant Jadhao'],
      // ['3113','Mihheeka Khair'],
      // ['3108','Jatin rane'],
      // ['3164','Snehal Kale'],
      // ['3225','Arun Mallik'],
      // ['3044','Zaid Attar'],
      // ['3269','Shriapad Badiger'],
      // ['3016','Chinmay Sawant'],
      // ['3032','Siddharth Gaikwad'],
      // ['3324','Pramod Wadekar'],
      // ['3112','Shivani Bhore'],
      // ['3172','Isha Nabaria'],
      // ['3008','Yogesh Bochare'],
      // ['3193','Chaitnya Kshirsagar'],
      // ['3328','Prathamesh'],
      // ['3068','Suyash Borate'],
      // ['3278', 'Parmita Bombarde'],
      ['F5019',{ name: 'shivam waghe', time: '00:41:00' }],
      ['F5075',{ name: 'manali gosavi', time: '00:50:00' }],
      ['F5038',{ name: 'Yash Bhapkar', time: '00:25:00' }],
      ['F5016',{ name: 'Thirupathi Jayaraj', time: '00:36:00' }],
      ['F5001',{ name: 'sanjay joshi', time: '00:45:00' }],
      ['F5011',{ name: 'abhay lamb' }],
      ['F5085',{ name: 'mahabir mahto', time: '00:35:00' }],
      ['F5086',{ name: 'annu ray', time: '01:11:00' }],
      ['F5131',{ name: 'Kshitij Goswami', time: '00:36:00' }],
      ['F5039',{ name: 'Piyush pawar', time: '00:34:00' }],
      ['F5012',{ name: 'Santosh Chandrakari', time: '00:42:00' }],
      ['F5006',{ name: 'vaibhav nandurdikar', time: '00:51:00' }],
      ['F5005',{ name: 'ananda kusmude', time: '00:47:00' }],
      ['F5091',{ name: 'arjun', time: '00:36:00' }],
      ['F5090',{ name: 'ankit garg', time: '00:24:00' }],
      ['F5084',{ name: 'aryan', time: '00:37:00' }],
      ['F5110',{ name: 'swarup sutar', time: '01:11:00' }],
      ['F5111',{ name: 'swajeet sutar', time: '01:11:00' }],
      ['F5015',{ name: 'akshay athaley', time: '00:38:00' }],
      ['F5021',{ name: 'kartik mandal', time: '00:32:00' }],
      ['F5017',{ name: 'rayhan sayad' }],
      ['F5087',{ name: 'shivam aher', time: '00:38:00' }],
      ['F5026',{ name: 'saee tilak', time: '00:39:00' }],
      ['F5112',{ name: 'gourav powar' }],
      ['F5020',{ name: 'kirti bhatia', time: '00:54:00' }],
      ['F5035',{ name: 'dipak kumbhar', time: '00:24:00' }],
      ['F5106',{ name: 'darsh agarwal', time: '00:37:00' }],
      ['F5034',{ name: 'tejas dharne' }],
      ['F5037',{ name: 'shailesh sonawane', time: '01:06:00' }],
      ['F5007',{ name: 'samiksha khare' }],
      ['F5040',{ name: 'ashwin shinde', time: '00:35:00' }],
      ['F5074',{ name: 'shivam roy' }],
      ['F5076',{ name: 'sanskriti hegade' }],
      ['F5025',{ name: 'shekhar javir' }],
      ['F5082',{ name: 'rishikesh patil', time: '00:42:00' }],
      ['F5078',{ name: 'radhika rahinj' }],
      ['F5014',{ name: 'prathamesh dasarwar', time: '00:40:00' }],
      ['F5009',{ name: 'subodh khasnis' }],
      ['F5010',{ name: 'mahesh bhosale', time: '00:45:00' }],
      ['F5081',{ name: 'saurabh raut', time: '00:31:00' }],
      ['F5107',{ name: 'namrata kashid', time: '00:30:00' }],
      ['F5100',{ name: 'sujal katake', time: '00:27:00' }],
      ['F5093',{ name: 'tejas gaikwad', time: '00:27:00' }],
      ['F5096',{ name: 'samartha bhople', time: '00:29:00' }],
      ['F5094',{ name: 'pramod gaikwad' }],
      ['F5022',{ name: 'amruta mandave', time: '00:27:00' }],
      ['F5083',{ name: 'nimish marathe', time: '00:39:00' }],
      ['F5013',{ name: 'mangesh tatepatil' }],
      ['F5003',{ name: 'om jadhav', time: '00:37:00' }],
      ['F5002',{ name: 'suraj sonune', time: '00:51:00' }],
      ['F5004',{ name: 'amey dhenge', time: '00:50:00' }],
      ['F5108',{ name: 'shrushti warangule', time: '00:26:00' }],
      ['F5079',{ name: 'soaham panse', time: '00:51:00' }],
      ['F5080',{ name: 'prakash chitnis', time: '00:71:00' }],
      ['F5018',{ name: 'megh lahoti', time: '00:71:00' }],
      ['F5023',{ name: 'archana gandhi', time: '00:59:00' }],
        ['F5024',{ name: 'vaishali bhagwat', time: '00:46:00' }],
        ['F5027',{ name: 'pravin wadekar', time: '00:38:00' }],
        ['F5036',{ name: 'ishaan suryavanshi', time: '00:34:00' }],
        ['F5028',{ name: 'ranjankumar sharma' }],
        ['F5029',{ name: 'sanjaykumar sharma' }],
        ['F5030',{ name: 'rudra sharma' }],
        ['F5031',{ name: 'roma sharma' }],
        ['F5032',{ name: 'nilesh sharma' }],
        ['F5033',{ name: 'mayur mandale' }],
        ['F5077',{ name: 'grandsingh' }],
        ['F5088',{ name: 'sanyogita patil', time: '00:38:00' }],
        ['F5089',{ name: 'aryan bhajane', time: '00:29:00' }],
        ['F5092',{ name: 'rushikesh rajput', time: '00:29:00' }],
        ['F5095',{ name: 'prithvirajsingh rajput', time: '00:38:00' }],
        ['F5097',{ name: 'suhani', time: '00:43:00' }],
      ['5053', { name: 'Rudraksh Shinde', time: '' }],
      ['5021', { name: 'Kaushik Narang', time: '00:49:00' }],
      ['5022', { name: 'Khushbu Jethwani', time: '00:49:00' }],
      ['5036', { name: 'Balaji Kale', time: '00:24:00' }],
      ['5039', { name: 'Kaiwalya Pingle', time: '00:49:00' }],
      ['5040', { name: 'Kaushik Narang', time: '00:49:00' }],
      ['5054', { name: 'Suraj Sidankar', time: '00:31:00' }],
      ['5070', { name: 'Torvna Porfani', time: '00:54:00' }],
      // ['3072', 'Ritesh Patil'],
      // ['3080', 'Gaurav Wayal'],
      // ['3092', 'Damini Patil'],
      // ['3004', 'Pavan Palaskar'],
      // ['3088', 'Lokesh Naik'],
      // ['3056', 'Sumit Korde'],
      // ['3100', 'Aditya Gajbhiye'],
      // ['3204', 'Mahind Salve'],
      // ['3052', 'Maruti Zore'],
      // ['3344', 'Abhijit Jamble'],
      // ['3340', 'Soham Dhurve'],
      ['5105', { name: 'Kalim Khan', time: '00:35:00' }],
      // ['3348', 'Sachin Korde'],
      ['10050',{ name: 'Raghavendra Godase'}],
      ['10071',{ name: 'Rajib Kumar'}],
      ['10070',{ name: 'Arif Choudhary'}],
      ['10210', { name: 'Varad Bagal', time: '01:17:00' }],
      ['10036', { name: 'Sanjay Pandit' }],
      ['10019', { name: 'Pravin Rasal', time: '01:13:00' }],
      ['10220', { name: 'Ipsy Chhotray', time: '01:18:00' }],
      ['10100', { name: 'Gaurav Gabhane', time: '00:47:00' }],
      ['10016', { name: 'Ca.Rajendra Gujarathi', time: '01:11:00' }],
      ['10021', { name: 'Hrishikesh Kamat', time: '01:08:00' }],
      ['', { name: 'Kunal Jadhav' }],
      ['10018', { name: 'Mahesh Kadu', time: '00:48:00' }],
      ['10057', { name: 'Amogh Girgaonkar', time: '01:09:00' }],
      ['10053', { name: 'Rani Pereira' }],
      ['10009', { name: 'Vivek Pandey', time: '01:06:00' }],
      ['10218', { name: 'Abhishek Mohanty', time: '00:48:00' }],
      ['10096', { name: 'Sanjay Shirshpad', time: '00:54:00' }],
      ['10023', { name: 'Yash Jadhav', time: '00:47:00' }],
      ['10025', { name: 'Akhil Iyer', time: '01:03:00' }],
      ['10052', { name: 'Deepak Londhe', time: '01:16:00' }],
      ['10022', { name: 'Mandar Shintre', time: '01:08:00' }],
      ['10013', { name: 'Pranshu Sakalle', time: '01:21:00' }],
      ['10024', { name: 'Sangram Polekar', time: '00:45:00' }],
      ['10056', { name: 'Aditya Godbole' }],
      ['10201', { name: 'Swapnil Kale', time: '01:47:00' }],
      ['10028', { name: 'Prashant Kulkarni', time: '01:04:00' }],
      ['10026', { name: 'Amol Amune', time: '00:29:00' }],
      ['', { name: 'Sagar Kharpudikar'}],
      ['10010', { name: 'Akshay Chaudhari', time: '01:06:00' }],
      ['10046', { name: 'Tanish Desai' }],
      ['10012', { name: 'Sachin Chavan', time: '01:16:00' }],
      ['10033', { name: 'Kalyani Shinde', time: '00:59:00' }],
      ['10020', { name: 'Vishnu Gawali', time: '01:14:00' }],
      ['10205', { name: 'Vaishali Gaurav'}],
      ['10027', { name: 'Rajendra Muthe', time: '0:57:00' }],
      ['10197', { name: 'Pradeep Parate', time: '01:06:00' }],
      ['10196', { name: 'Sanjay Shirsad', time: '01:19:00' }],
      ['10219', { name: 'Anil Kumar', time: '00:55:00' }],
      ['10077', { name: 'Vaidehi Srivastava', time: '00:52:00' }],
      ['10206', { name: 'Samrat Phadnis' }],
      ['10063', { name: 'Dipanshu Mohanty', time: '00:56:00' }],
      ['10207', { name: 'Mangesh Kolapkar' }],
      ['10054', { name: 'Sumit Jadhav' }],
      ['10208', { name: 'Janhvai Patil', time: '01:17:00' }],
      ['10062', { name: 'Dilip Deepak',  }],
      ['', { name: 'Rajendrakumar Balasaheb'}],
      ['10034', { name: 'Rakesh Mehta', time: '00:43:00' }],
      ['10032', { name: 'Rohit Bhatia', time: '01:04:00' }],
      ['10060', { name: 'Ninad Kawde', time: '00:52:00' }],
      ['10209', { name: 'Anil Sawale', time: '01:38:00' }],
      ['10076', { name: 'Pankaj Kumar' }],
      ['', { name: 'Santosh Bhoyar' }],
      ['10059', { name: 'Sadhna Dhar Tikoo' }],
      ['10061', { name: 'Fatema Moiz', time: '01:10:00' }],
      ['10003', { name: 'Vaishnavi Andhare' }],
      ['10007', { name: 'Rupali Desai', time: '01:10:00' }],
      ['10001', { name: 'Prabhakar Jadhav', time: '00:57:00' }],
      ['10058', { name: 'Zainab Jambughodawala', time: '01:11:00' }],
      ['10030', { name: 'Shailja Kurnar', time: '00:48:00' }],
      ['10051', { name: 'Parth Tungatkar' }],
      ['10203', { name: 'Dhiraj Pawar', time: '01:11:00' }],
      ['10040', { name: 'Nitika Sharma', time: '01:20:00' }],
      ['10039', { name: 'Ishwari Joshi', time: '00:44:00' }],
      ['10038', { name: 'Sakshi Goel', time: '00:44:00' }],
      ['10037', { name: 'Sandeep Patil', time: '01:20:00' }],
      ['10041', { name: 'Jyoti Singh', time: '01:26:00' }],
      ['10049', { name: 'Akansha Gaikwad', time: '00:39:00' }],
      ['10045', { name: 'Roshni Deshmukh', time: '01:20:00' }],
      ['10224', { name: 'Bhivaji Das' }],
      ['10005', { name: 'Vishal Bansode' }],
      ['10004', { name: 'Gayatri Chaudhari', time: '00:36:00' }],
      ['10015', { name: 'Aayoush Jaggade', time: '00:45:00' }],
      ['10008', { name: 'Padma Karande', time: '00:51:00' }],
      ['10042', { name: 'Sanjay Powar', time: '00:44:00' }],
      ['10006', { name: 'Avinash Mandhare', time: '01:07:00' }],
      ['10011', { name: 'Rohit More', time: '01:11:00' }],
      ['10194', { name: 'Shekhar Shinde', time: '00:43:00' }],
      ['10202', { name: 'Harsh Mane' }],
      ['10055', { name: 'Atharva Nene', time: '00:52:00' }],
      ['10002',{ name: 'Swara Mahabal', time: '' }],
      ['10029',{ name: 'Vishwas Suryawanshi', time: '00:30:00' }],
      ['10043',{ name: 'Ashish Sontakke', time: '01:15:00' }],
      ['10044',{ name: 'Swara Mahabal', time: '00:39:00' }],
      ['10014',{ name: 'Harsh Modak', time: '00:45:00' }],
      ['10204',{ name: 'Vijay Kadam', time: '00:55:00' }],
      ['10017',{ name: 'Akash Patil', time: '00:51:00' }],
      ['10221',{ name: 'Suraj Bhusari', time: '00:35:00' }],
      ['10031',{ name: 'Manthan Varma', time: '00:53:00' }],
      ['10035',{ name: 'Shivam Bhagwat', time: '00:39:00' }],
      ['10047',{ name: 'Kamlesh Gandhi', time: '00:45:00' }],
      ['10191',{ name: 'Sunil Dhakane', time: '00:45:00' }],
      ['10192',{ name: 'Deepak Pawar', time: '00:34:00' }],
      ['10193',{ name: 'Atul Jamk', time: '00:55:00' }],
      ['10211',{ name: 'Krishna Pal', time: '00:34:00' }],
      ['ankush',{ name: 'Ankush Lad' }],
      ['sagardahi',{ name: 'Sagar Dahiwale'}],
      ['shivkak',{ name: 'Shivshankar Kakade'}],
      ['sureshp',{ name: 'Suresh P'}],
      ['ananyam',{ name: 'Ananya Mallik'}],
      ['10212',{ name: 'Shakuntaladevi', time: '00:34:00' }]
    ])
  ;

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
      const file = new File([pdfBytes], `marathon_certificate.pdf`, { type: 'application/pdf;charset=utf-8' });
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
