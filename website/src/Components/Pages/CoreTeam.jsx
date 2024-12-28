import "./coreTeam.css";


const CoreTeam = () => {
    return (
        <>
            <div className="title fontstyle"><p>《 CORE TEAM 》</p>
                <hr class="w-1/2 mx-auto my-5 border-siteGreen border-2"></hr></div>
            <div className="cardcontainer">
                <div className="portfolios"><h1 className="cardHeading" >Secretory</h1>
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