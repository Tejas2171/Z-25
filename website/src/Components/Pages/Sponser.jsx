import React, { useEffect, useRef } from "react";
import "./sponser.css";
import Card from "./Card";
import sponsorsData from "./sponsersData";
import { gsap } from "gsap";

const Sponser = () => {
    const headerRef = useRef(null); // Create a reference for the "Sponsors" text

    useEffect(() => {
        // GSAP animation for the header
        gsap.fromTo(
            headerRef.current, 
            { y: 90, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 2.5
            , ease: "power3.out" } 
        );
    }, []);

    return (
        <div className="sponsor-page">
            <div className="header" ref={headerRef}> {/* Attach the ref here */}
                <p>Sponsors</p>
            </div>
            <div className="cards">
                {sponsorsData.map((sponsor) => (
                    <Card
                        key={sponsor.id} // Ensure each card has a unique key
                        name={sponsor.name}
                        imageUrl={sponsor.imageUrl}
                        type={sponsor.type}
                        buttonURL={sponsor.buttonURL}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sponser;