import React, { useEffect } from "react";
import "./Accomodation.css";
import { FaAppleAlt, FaBed, FaBitbucket, FaBowlingBall, FaBoxOpen, FaFan, FaLocationArrow, FaLockOpen, FaTrain, FaWifi } from "react-icons/fa";
function IconWithText({ icon: Icon, text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon style={{ marginRight: '8px' }} />
            <p>{text}</p>
        </div>
    );
}
const guidelines = [
    "Bring valid college ID during registration.",
    "No students from other colleges allowed to stay in COEP Hostel rooms. Misconduct may lead to disqualification.",
    "Deposit will not be refunded in case of misconduct.",
    "Only authorized members on the list can stay at COEP Hostel.",
    "Ensure the entire team arrives at once for quicker registration.",
    "Rooms will be checked daily. No smoking, drinking, loud music, arguing, or fighting allowed.",
    "Misconduct will lead to disqualification, cancelled accommodation, and non-refundable deposit.",
    "Hostel gates open at 5:30 am and close at 11:30 pm (9:00 pm for girls). No entry/exit between 11:30 pm and 5:00 am.",
    "Maintain cleanliness and decorum in the COEP hostel.",
    "COEP or ZEST'25 organizers are not responsible for mishaps during your stay.",
    "All guidelines are subject to change. Final decision rests with the ZEST'25 managing committee.",
  ];
  
const Accomodation = () => {
    return (
        <>
        <div className="all">
            <p className="smlgmain justify-center items-center">ACCOMODATION</p>
            <div className="flex justify-center items-center pt-7">
            <a href="https://forms.gle/NzLcDPvFyQFNciiJ7" target="_blank">
                <button className="px-6 py-2 border-2 border-green-500 text-green-500 font-semibold rounded-lg 
                hover:bg-green-500 hover:text-white transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg">REGISTER</button>
            </a>    
            </div>
            <div className="cards">
                <div className="card-template animated-gradient-frame">
                    <h1 className="card-head">Guidelines</h1>
                    <h1 className="card-head">Rules and Regulation</h1>
                    <div className="card-info">
                        <ol>
                            <li>Students willing to avail of accommodation facilities must carry</li>
                            <ul>
                                <li>Registration receipt (Accommodation Registration)</li>
                                <li>Government Id proof</li>
                                <li>College identity cards</li>
                                <li>Passport size photo</li>
                            </ul>
                        {guidelines.map((point, index) => (
                        <li key={index}>{point}</li>
                        ))}
                        </ol>
                    </div>
                </div>
                <div className="card-template animated-gradient-frame">
                    <h1 className="card-head">Price</h1>
                    <h1 className="card-head">Fee Structure</h1>
                    <div className="card-info">
                        <ol>
                            <li>The accommodation will be available from 6th February ( 9:00 am ) to 9th February (5:00 pm) .For cricket, accommodation will be available as per the given dates for matches.</li>
                            <li>The Accommodation Fee per person per day is ₹450/-(all charges included).</li>
                            <li>The Fee will be ₹350/- per day if accommodation is confirmed for 2 days or more .</li>
                            <li>A refundable deposit of ₹500/- will have to be paid before the procurement of the room by every individual. Deposit will be received in cash form only.</li>
                            <li>Once the accommodation fees is made, no amount shall be refunded.</li>
                        </ol>
                        <ul>
                            <p><strong>Facilities Provided</strong></p>
                            <p>Everyone will be provided with:</p>
                            <div>
                                <p><IconWithText
                                    icon={FaBoxOpen}
                                    text="Welcome Kit"
                                /></p>
                                 <p><IconWithText
                                    icon={FaAppleAlt}
                                    text="One-time meal (Lunch)"
                                /></p>
                                 <p><IconWithText
                                    icon={FaWifi}
                                    text="Free Wifi"
                                /></p>
                                 <p><IconWithText
                                    icon={FaBed}
                                    text="1 Bed, bedsheet and a blanket"
                                /></p>
                                <p>If any of the Above Items are found to be missing in the given Room a fine of ₹500/- ( per item missing) is charged.</p>
                            </div>
                            <br></br>
                            <p>Each room will be provided with:</p>
                            <ol>
                            <p><IconWithText
                                    icon={FaFan}
                                    text="Ceiling fan, Tubelights"
                                /></p>
                                <p><IconWithText
                                    icon={FaLockOpen}
                                    text="Lock and Key"
                                /></p>
                                <p><IconWithText
                                    icon={FaBitbucket}
                                    text="Bucket and a Mug"
                                /></p>
                            </ol>
                        </ul>
                    </div>
                </div>
                <div className="card-template animated-gradient-frame">
                    <h1 className="card-head">Route to COEP</h1>
                    <div className="card-info">
                        <p>Pune is well connected to most major cities in India by railways and roads. There are frequent trains and buses to Pune.</p>
                        <p>COEP ZEST won't provide any facilities to reach the destination. Reaching inside the campus, participants have to first report to the registration desk situated in the visitors' room of the hostel campus.</p>
                        <p>You can reach COEP Hostel in two ways from the nearby railway station and bus stand.</p>
                        <br></br>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <FaTrain style={{ marginRight: '8px', color: 'rgb(240, 189, 27, 1)' }} />
                            <p>From the train station:</p>
                        </div>
                        <p>The nearest station is Chhatrapati Shivaji Maharaj Nagar Railway Station. The COEP hostel is 850 metres away. Alternatively, you can reach the Pune railway station. The distance is almost 3.3 kilometres. Take a local autorickshaw or book a cab to reach COEP Hostel via the road. The travel time is approximately 10 minutes.</p>
                        <br></br>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaLocationArrow style={{ marginRight: '8px', color: 'rgb(240, 189, 27, 1)' }} />
                            <p>From the bus stand:</p>
                        </div>
                        <p>The nearest bus stand is the New Shivajinagar bus stand. The distance is close to 2 kilometres. You take a local autorickshaw or book a cab to COEP Hostel. Alternatively, you can reach the Swargate bus stand. The distance is approximately 4.4 kilometres. Travel time is approximately 15 minutes. Similarly, you can take a local autorickshaw or book a cab to COEP Hostel.</p>
                    </div>
                </div>
                <div className="card-template animated-gradient-frame">
                    <h1 className="card-head">Contact Us</h1>
                    <div className="card-info">
                        <p>ZEST has been a great example of providing a platform to all the players around the country.
                            ZEST Hospitality committee constantly strive toward the satisfaction of each sportsperson. We will leave no stone unturned in meeting the needs of secure accommodation away from home and ensure a comfortable and memorable stay at COEP Hostel.</p>
                        <div className="contact-info">
                            <p><strong>For any query or details contact us:</strong></p>
                            <br></br>
                            <div className="text-center">
                                <p><strong>Aditya</strong></p>
                                <p>+91 77560 20782</p>
                            </div>
                            <div className="text-center">
                                <p><strong>Atharva</strong></p>
                                <p>+91 70588 14599</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Accomodation;