import "./Card.css";
const Card = ({ name, imageUrl, type,buttonURL }) => {
    const handleButtonClick = () => {
        window.open(buttonURL, "_blank"); // Opens the URL in a new tab
    };
    return (
        <div className="card">
            
            <img src={imageUrl} alt={name} />
            <div className="intro">
            <p id="name">{name}</p>
            <p id="type">{type}</p>
            
            {buttonURL && (
                    <button className=" card-button" onClick={handleButtonClick}>
                        Visit Now
                    </button>
                )}
                
            </div>
        </div>
    );
};

export default Card;