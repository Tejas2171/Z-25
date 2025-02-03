import "./Card.css";
const Card = ({ name, imageUrl, type,link }) => {
    // const handleButtonClick = () => {
    //     window.open(buttonURL, "_blank"); // Opens the URL in a new tab
    // };
    return (
        <a href={link} target="_blank">
        <div className="card">
            
            {/* <a href={link} target="_blank"><img src={imageUrl} alt={name}  /></a> */}
            <img src={imageUrl} alt={name}  />
            <div className="intro">
            <p id="name">{name}</p>
            <p id="type">{type}</p>
            
            {/* {buttonURL && (
                    <button className=" card-button" onClick={handleButtonClick}>
                        Visit Now
                    </button>
                )} */}
                
            </div>
        </div>
        </a>
    );
};

export default Card;