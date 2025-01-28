import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [rote, setRote] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const progressX = e.clientX / window.innerWidth;
            const progressY = e.clientY / window.innerHeight;
            const rotation = -(progressX + progressY) * 45;
            setRote(Math.max((rotation + 65) * 0.3, 0));
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="fixed w-full h-[50px] text-lg z-[2] text-[#4b3a25] font-semibold bg-opacity-0 backdrop-blur-md flex items-center justify-between px-16 ">
            <div className="logocont">
            <div id="logo">ZEST`25</div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            {/* Navigation items for larger screens */}
            <div className="nav-items">
                <Link to="/marathon"><div className="nav-item">Marathon</div></Link>
                <Link to="/events"><div className="nav-item">Events</div></Link>
                <div className="nav-item">Team</div>
                <div className="nav-item">Accommodation</div>
                <div className="nav-item">Sponsors</div>
                <div className="nav-item">Gallery</div>
            </div>
            {/* Dropdown menu for mobile */}
            <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <Link to="/marathon"><div className="nav-item">Marathon</div></Link>
                <Link to="/events"><div className="nav-item">Events</div></Link>
                <div className="nav-item">Team</div>
                <div className="nav-item">Accommodation</div>
                <div className="nav-item">Sponsors</div>
                <div className="nav-item">Gallery</div>
            </div>
            <div className="relative flex justify-center items-center overflow-hidden">
                <img
                    className="w-48 translate-y-5 cover mascot"
                    src="/images/mascot-removebg-preview.png"
                    alt="Peak"
                />
                <div
                    style={{ transform: `rotate(${rote}deg) translateY(18px)` }}
                    className="absolute w-full"
                >
                    <div className="font-extrabold flex gap-3 translate-x-[84px] translate-y-[7px] eyes">
                        <div className="eye">.</div>
                        <div className="eye">.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
