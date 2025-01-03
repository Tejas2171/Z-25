import "./Card.css";
const Card = ({ name, imageUrl, type }) => {
    return (
        <div className="card">
            <p id="type">{type}</p>
            <img src={imageUrl} alt={name} />
            <p id="name">{name}</p>
        </div>
    );
};

export default Card;