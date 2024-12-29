import React, { useEffect } from "react";
import "./coreTeam.css";


const CoreTeam = () => {



    return (
        <>
         <div id="wave-background">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wavePath"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
  <use href="#wavePath" x="0" y="0" fill="rgba(0, 0, 0, 1)" />

  <use href="#wavePath" x="50" y="1" fill="rgba(255, 255, 0, 0.6)" />

  <use href="#wavePath" x="100" y="2" fill="rgba(255, 255, 0, 0.61)" />

  <use href="#wavePath" x="150" y="3" fill="rgba(255, 255, 0, 0.75)" />

  <use href="#wavePath" x="200" y="4" fill="rgb(255, 255, 0)" />
</g>
        </svg>
      </div>

            <div className="title fontstyle"><p>《 CORE TEAM 》</p>
                <hr className="w-1/2 mx-auto my-5 border-siteGreen border-2"></hr></div>
            <div className="cardcontainer">
                <div className="portfolios ">
                    <div className="cardHeading" >
                    </div>
                    <h1 className="cardHeading" >Secretory</h1>
                    <div className="cards"> <div className="teamCard">
                        <img className="profilePic" src="\images\profilePic.avif" alt="" />
                        <div className="teamInfo fontstyle"><h1>YUVRAJ</h1>
                            <div className="teamContacts">
                                <img src="\images\insta_icon.png" alt="" />
                                <img src="\images\linkdin_icon.png" alt="" />
                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="portfolios"><h1 className="cardHeading" >Overall Co-ordinator</h1>
                    <div className="cards"> <div className="teamCard">
                        <img className="profilePic" src="\images\profilePic.avif" alt="" />
                        <div className="teamInfo fontstyle"><h1>YUVRAJ</h1>
                            <div className="teamContacts">
                                <img src="\images\insta_icon.png" alt="" />
                                <img src="\images\linkdin_icon.png" alt="" />
                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="portfolios">
                    <h1 className="cardHeading" >WEB n APP</h1>
                    <div className="cards">
                        <div className="teamCard">
                            <img className="profilePic" src="\images\profilePic.avif" alt="" />
                            <div className="teamInfo fontstyle"><h1>YUVRAJ</h1>
                                <div className="teamContacts">
                                    <img src="\images\insta_icon.png" alt="" />
                                    <img src="\images\linkdin_icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="teamCard">
                            <img className="profilePic" src="\images\profilePic.avif" alt="" />
                            <div className="teamInfo fontstyle"><h1>YUVRAJ</h1>
                                <div className="teamContacts">
                                    <img src="\images\insta_icon.png" alt="" />
                                    <img src="\images\linkdin_icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>

        </>
    )
}

export default CoreTeam;
