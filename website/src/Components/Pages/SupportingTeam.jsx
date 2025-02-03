import "./supportingteam.css";


const SupportingTeam = () => {



  return (
    <>

      <div  style={{
        backgroundImage: "url('/suportinBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed", /* Fixed instead of absolute */
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, /* Ensures it stays behind content */
      }}></div>
      <div className="uvtitle pt-20 fontstyle"><p>SUPPORTING TEAM</p>
        <hr className="w-1/2 mx-auto my-5 border-siteGreen border-2"></hr></div>
      <div className="uvcardcontainer">
        <div className="portfolios ">


          <div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/sgbhirud.jpg" alt="" />
            <div className="teamInfo fontstyle"><h1>Prof. Sunil Bhirud</h1>
              <h2>Vice Chancellor</h2>
            </div>
          </div></div>
        </div>
        <div className="portfolios">
          <div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/khond.jpg" alt="" />
            <div className="teamInfo fontstyle"><h1>Dr. M. P. Khond</h1>
              <h2>Director, Board of Student Development </h2>
            </div>
          </div><div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/sonawne.webp" alt="" />
            <div className="teamInfo fontstyle"><h1>Dr. D. N. Sonawane</h1>
              <h2>Registrar</h2>
            </div>
          </div></div>


          </div>

        </div>

        <div className="portfolios">
          <div className="uvcards"> <div className="teamuvcard">
            <img className="profilePic" src="/14_Neelima_Kolhare.jpg" alt="" />
            <div className="teamInfo fontstyle"><h1>Prof. Neelima Kolhare</h1>
              <h2>Vice President, Gymkhana</h2>
            </div>
          </div>
            <div className="uvcards"> <div className="teamuvcard">
              <img className="profilePic" src="/amruta.png" alt="" />
              <div className="teamInfo fontstyle"><h1>Mrs. Amruta Deshpande</h1>
                <h2>Asst. Director, Physical Education</h2>
              </div>
            </div>
              <div className="uvcards">
                <div className="teamuvcard">
                  <img className="profilePic" src="/Dr.-Nitin-M.-Mohite.jpg" alt="" />
                  <div className="teamInfo fontstyle">
                    <h1>Dr. N. M. Mohite</h1>
                    <h2>
                      {`Faculty Advisor, Zest'25`}
                    </h2>
                  </div>
                </div> </div>



            </div>

          </div>




        </div>
      </div>



    </>
  )
}

export default SupportingTeam;