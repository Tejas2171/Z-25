import "./sponser.css"
import Card from "./Card"
import sponsorsData from "./sponsersData"
const Sponser = () => {
    return (
        <div className="sponsor-page">
            <div className="header">
                <p>Sponsors</p>
            </div>
            <div className="cards">
            {sponsorsData.map((sponsor) => (
                    <Card
                        key={sponsor.id} // Ensure each card has a unique key
                        name={sponsor.name}
                        imageUrl={sponsor.imageUrl}
                        type={sponsor.type}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sponser;