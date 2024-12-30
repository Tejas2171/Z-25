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
const Accomodation = () => {
    return (
        <>
            <p className="smlgmain justify-center items-center">ACCOMODATION</p>
            <div className="cards">
                <div className="card-template textbox">
                    <h1 className="card-head">Guidelines</h1>
                    <h1 className="card-head">Rules and Regulation</h1>
                    <div className="card-info">
                        <ol className="list">
                            <li>Students willing to avail of accommodation facilities must carry</li>
                            <ol>
                                <li>Registration receipt (Accommodation Registration)</li>
                                <li>Government Id proof</li>
                                <li>College identity cards</li>
                                <li>Passport size photo</li>
                            </ol>

                            <li>Every participant should produce their valid college ID cards during Registration.</li>
                            <li>Students from outside college are not allowed to stay with their COEP Hostel friends in their rooms during ZEST. If any such misconduct is found, strict action will be taken against both the student and their college team, which may lead to disqualification.</li>
                            <li>The deposit (Of all team members from all sports participated from his/her college) will not be refunded in the case of misconduct.</li>
                            <li>No extra members other than those on the authorized list will be entertained. They won’t be allowed to stay at the COEP Hostel Campus.</li>
                            <li>Make sure that the entire team arrives at the same time for smoother and faster registration.</li>
                            <li>Rooms will be checked at least once throughout the day. Activities such as smoking, drinking, loud music, noise, arguing with coordinators, fighting, and so on are not permitted on the COEP Hostel Campus.</li>
                            <li>If found, the student and all team members of all sports participated from his/her college will be disqualified, accommodation will be cancelled, and the deposit will not be refunded.</li>
                            <li>Hostel gates open at 5:30 am and close at 11:30 pm (9:00 pm for girls)</li>
                            <li>Coming in or going out between 11:30 pm and 5:00 am will not be allowed.</li>
                            <li>All students are required to maintain the decorum and cleanliness of the COEP hostel campus and follow the rules of the hostel campus.</li>
                            <li>COEP Technological University or the Zest'24 organizing team will not be responsible for any mishaps during the stay.</li>
                            <li>All the guidelines are subject to change and the final decision will be taken by the managing committee of ZEST'24.</li>
                        </ol>
                    </div>
                </div>
                <div className="card-template textbox">
                    <h1 className="card-head">Price</h1>
                    <h1 className="card-head">Fee Structure</h1>
                    <div className="card-info">
                        <ol>
                            <li>The accommodation will be available from 12th January ( 9:00 am ) to 14th January (5:00 pm) .For cricket, accommodation will be available as per the given dates for matches.</li>
                            <li>The Accommodation Fee per person per day is ₹400/-(all charges included).</li>
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
                                <p>If any of the Above Items are found to be missing in the given Room a fine of ₹500/- ( per item missing) is charged ."</p>
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
                <div className="card-template textbox">
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
                <div className="card-template textbox">
                    <h1 className="card-head">Contact Us</h1>
                    <div className="card-info">
                        <p>ZEST has been a great example of providing a platform to all the players around the country.
                            ZEST Hospitality committee constantly strive toward the satisfaction of each sportsperson. We will leave no stone unturned in meeting the needs of secure accommodation away from home and ensure a comfortable and memorable stay at COEP Hostel.</p>
                        <div className="contact-info">
                            <p><strong>For any query or details contact us:</strong></p>
                            <br></br>
                            <div>
                                <p><strong>Jayesh Awachar</strong></p>
                                <p>+91 90228 90253</p>
                            </div>
                            <div>
                                <p><strong>Adhiraj Ghadge</strong></p>
                                <p>+91 83698 24221</p>
                            </div>
                            <div>
                                <p><strong>Nagesh Kanchangire</strong></p>
                                <p>+91 90045 27329</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
}

export default Accomodation;