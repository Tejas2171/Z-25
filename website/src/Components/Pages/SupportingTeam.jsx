import { Link } from "react-router-dom";
import "./supportingteam.css";


const SupportingTeam = () => {



  return (
    <div className="text-white">
        <Link to="/coreTeam">
        <button
          type="button"
          className="fixed z-10 right-10 lg:top-[20%] top-0 transform -translate-y-1/2 px-6 py-3 bg-transparent text-yellow-500 border-2 border-solid border-yellow-500 font-bold rounded-lg shadow-lg focus:outline-none focus:ring-0 hover:bg-yellow-800"
        >
          Core Team
        </button>
      </Link>
      <div  style={{
        backgroundImage: "url('/images/supportinBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed", /* Fixed instead of absolute */
        top: 0,
        left: 0,
        opacity:0.8,
        width: "100vw",
        height: "100vh",
        zIndex: -1, /* Ensures it stays behind content */
      }}></div>
      <div className="uvtitle pt-20 fontstyle"><div className="uvbigtitle">SUPPORTING TEAM</div>
        <hr className="w-1/2 mx-auto my-5 border-siteGreen border-2"></hr></div>
      <div className="uvcardcontainer">
        <div className="portfolios ">


          <div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/images/sgbhirud.jpg" alt="" />
            <div className="teamInfo "><div className="uvprofname">Prof. Sunil Bhirud</div>
              <h2>Vice Chancellor</h2>
            </div>
          </div></div>
        </div>
        <div className="portfolios">
          <div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/images/khond.jpg" alt="" />
            <div className="teamInfo"><div className="uvprofname">Dr. M. P. Khond</div>
              <h2>Director, Board of Student Development </h2>
            </div>
          </div><div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/images/sonawne.webp" alt="" />
            <div className="teamInfo"><div className="uvprofname">Dr. D. N. Sonawane</div>
              <h2>Registrar</h2>
            </div>
          </div></div>


          </div>

        </div>

        <div className="portfolios">
          <div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/images/14_Neelima_Kolhare.jpg" alt="" />
            <div className="teamInfo "><div className="uvprofname">Prof. Neelima Kolhare</div>
              <h2>Vice President, Gymkhana</h2>
            </div>
          </div>
            <div className="uvcards"> <div className="teamuvcard">
              <img className="profilePic" src="/images/Amruta.png" alt="" />
              <div className="teamInfo  "><div className="uvprofname">Mrs. Amruta Deshpande</div>
                <h2>Asst. Director, Physical Education</h2>
              </div>
            </div>
              <div className="uvcards">
                <div className="teamuvcard">
                  <img className="profilePic" src="/images/Dr.-Nitin-M.-Mohite.jpg" alt="" />
                  <div className="teamInfo ">
                    <div className="uvprofname">Dr. N. M. Mohite</div>
                    <h2>
                      {`Faculty Advisor, Zest'25`}
                    </h2>
                  </div>
                </div> </div>



            </div>

          </div>




        </div>
      </div>



    </div>
  )
}

export default SupportingTeam;