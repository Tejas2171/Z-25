import "./card.css";
const palakcard = ({ name, imageUrl, type,link }) => {
    // const handleButtonClick = () => {
    //     window.open(buttonURL, "_blank"); // Opens the URL in a new tab
    // };
    return (
        <a href={link} target="_blank">
        <div className="palakcard">
            
            {/* <a href={link} target="_blank"><img src={imageUrl} alt={name}  /></a> */}
            <img className="imageofsponser" src={imageUrl} alt={name}  />
            <div className="intro">
            <p id="name">{name}</p>
            <p id="type">{type}</p>
            
            {/* {buttonURL && (
                    <button className=" palakcard-button" onClick={handleButtonClick}>
                        Visit Now
                    </button>
                )} */}
                
            </div>
        </div>
        </a>
    );
};

export default palakcard;