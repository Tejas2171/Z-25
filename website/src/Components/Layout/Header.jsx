import { useEffect, useState } from "react";
import './header.css';

const Header = () => {
  const [rote, setRote] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const progressX = e.clientX / window.innerWidth;
      const progressY = e.clientY / window.innerHeight;
      const rotation = -(progressX + progressY) * 45;
      setRote(Math.max((rotation + 65) * 0.3, 0));
    });
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="z-50 fixed w-full h-[80px] text-lg text-[#4b3a25] font-semibold md:bg-white lg:bg-opacity-10 backdrop-blur-xl flex items-center justify-between px-16 sm:px-8 md:px-12">
        <a id="logo" className="text-2xl sm:text-xl" href="/">ZEST`25</a>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="sm:block md:hidden" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span className="block w-6 h-1 bg-[#4b3a25] mb-2"></span>
            <span className="block w-6 h-1 bg-[#4b3a25] mb-2"></span>
            <span className="block w-6 h-1 bg-[#4b3a25]"></span>
          </div>
        </div>

        <div className={`flex items-center bg-white/50 w-[1200px] lg:bg-transparent justify-center gap-16 sm:gap-8 md:gap-12 flex-wrap ${menuOpen ? 'block' : 'hidden'} sm:flex`}>
          <div className="flex items-center justify-center pt-20 lg:pt-0 gap-4 sm:gap-1 md:gap-8 flex-wrap">
            <div className="nav-item"><a href="/events">Events</a></div>
            <div className="nav-item"><a href="/marathon">Marathon</a></div>
            <div className="nav-item"><a href="/sponsers">Sponsors</a></div>
            <div className="nav-item"><a href="/accomodation">Accommodation</a></div>
            <div className="nav-item"><a href="/coreTeam">CoreTeam</a></div>
            <div className="nav-item"><a href="/supportingTeam">SupportingTeam</a></div>
            <div className="nav-item"><a href="/gallery">Gallery</a></div>
            <div className="nav-item"><a href="/contact">Contact Us</a></div>
          </div>

          {/* Image Section */}
          <div className="relative opacity-0 lg:opacity-100 flex justify-center items-center overflow-hidden">
            <img
              className="w-48 sm:w-40 md:w-44 translate-y-5 translate-x-2 cover"
              src="images/peak-removebg-preview (1).png"
              alt="Peak"
            />
            <div
              style={{ transform: `rotate(${rote}deg) translateY(18px)` }}
              className="absolute w-full"
            >
              <div className="font-extrabold flex gap-3 translate-x-[84px] translate-y-[7px]">
                <div>.</div>
                <div>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
