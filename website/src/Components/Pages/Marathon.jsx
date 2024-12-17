import "./mara.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
// import Home from "./spline";

const Marathon = () => {
  useEffect(() => {
    // Create an Intersection Observer
    const revealElements = document.querySelectorAll(".reveal");

    const options = {
      root: null, // Use the viewport as the root
      threshold: 1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -100px 0px", // Trigger 50px before it fully enters the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, options);

    // Observe each element with the 'reveal' class
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const TimingCard = ({ defaultSrc, hoverSrc, text }) => (
    <div className="inside-inside-timings relative group">
      <img
        className="h-56 img-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
        src={defaultSrc}
        alt="default"
      />
      <img
        className="h-56 img-2 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        src={hoverSrc}
        alt="hover"
      />
      <div className="pt-8">
        <p className="text-center">{text}</p>
      </div>
    </div>
  );

  const Card = ({ imgSrc, title }) => (
    <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
      <div className="p-2 md:p-10">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="pb-1 md:pb-8">
        <h4 className="text-xs md:text-3xl text-center font-extrabold">{title}</h4>
      </div>
    </div>
  );

  const RunCard = ({ distance, title, description }) => (
    <div className="card relative rounded-2xl group">
      <div className="lines"></div>
      <div className="category_card w-full flex flex-col justify-center items-center relative z-5 p-6 max-w-lg rounded-lg shadow-lg group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
        <h2 className="text-4xl font-bold text-center">{distance} KM</h2>
        <h3 className="text-2xl text-center">{title}</h3>
        <p className="text-sm text-center">{description}</p>
        <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
          Register
        </button>
      </div>
    </div>
  );
  
  return (
    <div className="">
      {/* Hero Section */}
      <section id="hero" className="">
        <video
          autoPlay
          muted
          loop
          className="z-10 absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="Marathon-edit.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="un z-30 relative">ZEST`25</div>
        <div className="main z-20 flex smlgmain justify-center items-center ">
          MARATHON
        </div>
      </section>

      {/* Theme Section */}
      <section id="theme" className="">
        <div className="inside-theme w-full bg-siteGreen py-32">
          <div className="w-full flex gap-20 p-20">
            <div className="Theme-title">
              <h1 className="reveal">RUN FOR</h1>
              <h1 className="reveal">UPLIFTMENT</h1>
              <h1 className="reveal">RUN FOR</h1>
              <h1 className="reveal">CHANGE</h1>
            </div>
            <div className="Theme-description font-semibold">
              <p className="">
                This marathon theme, Run for Upliftment, Run for Change, is a
                powerful call to action for individuals to use their physical
                energy to drive social progress. It symbolizes the
                transformative power of individual effort to create a positive
                impact on society. By participating in this marathon,
                individuals can become catalysts for change, inspiring others to
                join the movement and contribute to a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="x w-full">
        {/* Timings and Location */}
        <section id="timings" className="">
          <div className="inside-timings w-full flex justify-evenly py-40 pt-48 ">
            <TimingCard defaultSrc="Time.png" hoverSrc="5am.png" text="TIME" />
            <TimingCard defaultSrc="Date.webp" hoverSrc="12jan.png" text="DATE" />
            <TimingCard defaultSrc="location-removebg-preview.png" hoverSrc="ground.png" text="LOCATION" />
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="p-16 ">
          <div className="inside-categories">
            <div className="inside-inside-categories1">
              <h1 className="reveal">《 CATEGORIES 》</h1>
              <hr className="w-1/2 mx-auto my-5 border-siteGreen border-2" />
            </div>
            <div className="inside-inside-categories2 flex justify-center py-32">
            <div className="flex flex-wrap justify-center gap-8 py-6">
    <RunCard
      distance="3"
      title="Fun Run"
      description="Perfect for beginners and families!"
    />
    <RunCard
      distance="5"
      title="Fitness Run"
      description="Ideal for team-building and staying active"
    />
    <RunCard
      distance="10"
      title="Challenging Run"
      description="Push your limits and achieve greatness!"
    />
  </div>
          </div>
          </div>
        </section>
      </div>

      {/* Goodies */}
      <div className="y">
      <section id="goodies" className=" bg-siteGray py-32 w-full">
        <div>
        <h1 className="reveal">
  《 GOODIES 》
</h1>
<hr className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-1/2 mx-auto my-5 border-siteGreen border-2" />

        </div>
        <div className="py-6 md:py-32 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24 max-w-[80%] mx-auto">
        <Card imgSrc="T-shirt (2).png" title="Finishers Medal" />
        <Card imgSrc="medals (2).png" title="T-shirt" />
        <Card imgSrc="certificates (2).png" title="Certificates" />
        <Card imgSrc="refreshments (2).png" title="Refreshments" />
        <Card imgSrc="welcome (2).png" title="Welcome Kit" />
        <Card imgSrc="medical (2).png" title="Medical Support" />
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="left-side flex min-h-[650px] bg-siteGreen">
          <div className="smlg bg-siteGreen w-full flex flex-col justify-center items-center">
            <p>MARA</p>
            <p>THON</p>
          </div>
          <div className="contact bg-siteWhite w-full py-12 px-6">
            <div className="mb-12">
              <h2 className="text-5xl text-center mb-6">Follow Us</h2>
              <div className="logos flex justify-center gap-8">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform "
                >
                  <FaInstagram className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaFacebook className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaTwitter className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaLinkedin className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
              </div>
            </div>
            <hr className="border-t-2 border-siteGreen my-4" />
            <div className="text-center">
              <h2 className="text-5xl mb-6">For Any Queries, Contact</h2>
              <div className="space-y-6 text-center">
  {[
    { name: "Jayesh Awachar", phone: "+91 90228 90253" },
    { name: "Adhiraj Ghadge", phone: "+91 83698 24221" },
    { name: "Nagesh Kanchangire", phone: "+91 90045 27329" },
  ].map((contact, index) => (
    <div key={index} className="flex flex-col gap-1 text-3xl font-medium">
      <div>{contact.name}</div>
      <div className="text-lg text-gray-600">{contact.phone}</div>
    </div>
  ))}
</div>
            </div>
            <hr className="border-t-2 border-siteGreen my-4" />
            <div className="flex-col justify-center items-center">
              <div className="text-2xl">
                <h3>Copyright © 2025. All Rights Reserved.</h3>
              </div>
              <div className="text-2xl font-light">
                <h3>Designed by ZEST`25</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Marathon;