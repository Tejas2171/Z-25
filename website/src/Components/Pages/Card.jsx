import "./Card.css";
const Card = ({ name, imageUrl, type }) => {
    return (
        <div className="card">
            
            <img src={imageUrl} alt={name} />
            <p id="name">{name}</p>
            <p id="type">{type}</p>
        </div>
    );
};

export default Card;