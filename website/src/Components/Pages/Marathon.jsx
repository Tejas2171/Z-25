import "./mara.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import Header from"../Layout/Header"
gsap.registerPlugin(ScrollTrigger);

const Marathon = () => {
  
  useEffect(() => {
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

  useGSAP(() => {
    // Initial State
    gsap.set(".abc", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0% 0%",
    });

    // Animation
    gsap.to(".abc", {
      clipPath: "polygon(14% 6%, 72% 0%, 86% 88%, 0% 100%)",
      borderRadius: "0 0 54% 10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".abc",
        start: "top 0",
        end: "top -300",
        scrub: true,
      },
    });
  });

  return (
    <>
    <Header />
    <div className="mara-body">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-siteGreen">
      <Link to="/certificate-generator">
      <button 
        type="button" 
        className="absolute z-50 right-10 top-[12%] transform -translate-y-1/2 px-6 py-3 bg-transparent text-yellow-500 border-2 border-solid border-yellow-500 font-bold rounded-lg shadow-lg focus:outline-none focus:ring-0 hover:bg-yellow-800"


      >
        Get e-Certificate
      </button>
      </Link>
        <div>
          <div className="coep-logo absolute z-40 top-4 left-4 w-32 lg:top-10 lg:left-10 lg:w-52 opacity-60">
            <img src="images/Coep logo white.png" />
          </div>
          <div className="line-logo absolute z-40 top-5 left-16 w-32 lg:top-14 lg:left-32 lg:w-48 opacity-60">
            <img src="images/line.png" />
          </div>
          <div className="fit-logo absolute z-40 top-9 left-36 w-24 lg:top-14 lg:left-64 lg:w-48 opacity-60">
            <img src="images/pngaaa.com-1098574.png" />
          </div>
        </div>
        <div id="hero" className="abc z-10">
          <video
            autoPlay
            muted
            loop
            className="z-10 absolute top-0 left-0 w-full h-full object-cover opacity-50"
          >
            <source src="images/Marathon-edit.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="un z-30 relative">ZEST`25</div> */}
          <div className="un z-30 relative">COEP Zest`25 presents marathon</div>
          <div className="main absolute z-20 smlgmain">RUNATHON</div>
        </div>
        <div className="main2 absolute smlgmain">RUNATHON</div>
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
            <div className="inside-inside-timings relative group">
              <img
                className="h-56 img-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                src="images/Time.png"
                alt="default"
              />
              <img
                className="h-56 img-2 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out "
                src="images/5am.png"
                alt="hover"
              />
              <div className="pt-8">
                <p className="text-center">TIME</p>
              </div>
            </div>
            <div className="inside-inside-timings relative group">
              <img
                className="h-56 img-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                src="images/Date.webp"
                alt="default"
              />
              <img
                className="h-56 img-2 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                src="images/12jan.png"
                alt="hover"
              />
              <div className="pt-8">
                <p className="text-center">DATE</p>
              </div>
            </div>
            <div className="inside-inside-timings relative group">
              <img
                className="h-56 img-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                src="images/location-removebg-preview.png"
                alt="default"
              />
              <img
                className="h-56 img-2 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                src="images/ground.png"
                alt="hover"
              />
              <div className="pt-8">
                <p className="text-center">LOCATION</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="p-16">
          <div className="inside-categories">
            <div className="inside-inside-categories1">
              <h1 className="reveal">&#12298; CATEGORIES &#12299;</h1>
              <hr className="w-1/2 mx-auto my-5 border-siteGreen border-2" />
            </div>
            <div className="inside-inside-categories2 flex justify-center items-center gap-10 py-32">
              <div className="card relative rounded-2xl ">
                <div className="lines"></div>
                <div className="category_card w-full flex flex-col justify-evenly items-center relative p-6  rounded-lg shadow-lg">
                  <h2 className="text-4xl font-bold text-center">3 KM</h2>
                  <h3 className="text-2xl">Fun Run</h3>
                  <p className="text-sm">
                    Perfect for beginners and families !
                  </p>
                  <a
                    href="https://unstop.com/p/coep-zest-marathon25-college-of-engineering-coep-pune-1295467"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                      Register
                    </button>
                  </a>
                </div>
              </div>
              <div className="card relative rounded-2xl">
                <div className="lines"></div>
                <div className="category_card w-full flex flex-col justify-evenly items-center relative p-6 max-w-lg rounded-lg shadow-lg">
                  <h2 className="text-4xl font-bold text-center">5 KM</h2>
                  <h3 className="text-2xl">Fitness Run</h3>
                  <p className="text-sm">Ideal for staying active and fit !</p>
                  <a
                    href="https://unstop.com/p/coep-tech-zest25-marathon-5-km-fitness-run-college-of-engineering-coep-pune-1297369"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                      Register
                    </button>
                  </a>
                </div>
              </div>
              <div className="card relative rounded-2xl">
                <div className="lines"></div>
                <div className="category_card w-full flex flex-col justify-evenly items-center relative p-6 max-w-lg rounded-lg shadow-lg">
                  <h2 className="text-4xl font-bold text-center">5 KM</h2>
                  <h3 className="text-2xl">Corporate Run</h3>
                  <p className="text-sm">A step up for aspiring runners !</p>
                  <a
                    href="https://unstop.com/p/coep-tech-zest25-marathon-5-km-corporate-run-college-of-engineering-coep-pune-1297572"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                      Register
                    </button>
                  </a>
                </div>
              </div>
              <div className="card relative rounded-2xl">
                <div className="lines"></div>
                <div className="category_card w-full flex flex-col justify-evenly items-center relative p-6 max-w-lg rounded-lg shadow-lg">
                  <h2 className="text-4xl font-bold text-center">10 KM</h2>
                  <h3 className="text-2xl">Endurance Run</h3>
                  <p className="text-sm">
                    Push your limits and achieve greatness !
                  </p>
                  <a
                    href="https://unstop.com/p/coep-tech-zest25-marathon-10-km-endurance-run-college-of-engineering-coep-pune-1297613"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Goodies */}
      <div className="y">
        <section id="goodies" className=" bg-siteGray pb-32 pt-16 w-full">
          <div>
            <h1 className="reveal">《 GOODIES 》</h1>
            <hr className="w-1/2 mx-auto my-5 border-siteGreen border-2" />
          </div>
          <div className="py-6 md:py-32 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24 max-w-[80%] mx-auto">
            <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
              <div className="p-2 md:p-10">
                <img
                  src="images/T-shirt (2).png"
                  alt="Image 1"
                  className="w-full h-16 md:h-48 object-cover"
                />
              </div>
              <div className="pb-1 md:pb-8">
                <h4 className="text-xs md:text-3xl text-center font-extrabold">
                  Finishers Medal
                </h4>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
              <div className="p-2 md:p-10">
                <img
                  src="images/medals (2).png"
                  alt="Image 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="pb-1 md:pb-8">
                <h4 className="text-xs md:text-3xl text-center font-extrabold">
                  T-shirt
                </h4>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
              <div className="p-2 md:p-10">
                <img
                  src="images/certificates (2).png"
                  alt="Image 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="pb-1 md:pb-8">
                <h4 className="text-xs md:text-3xl text-center font-extrabold">
                  Certificates
                </h4>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
              <div className="p-2 md:p-10">
                <img
                  src="images/refreshments (2).png"
                  alt="Image 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="pb-1 md:pb-8">
                <h4 className="text-xs md:text-3xl text-center font-extrabold">
                  Refreshments
                </h4>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
              <div className="p-2 md:p-10">
                <img
                  src="images/welcome (2).png"
                  alt="Image 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="pb-1 md:pb-8">
                <h4 className="text-xs md:text-3xl text-center font-extrabold">
                  Welcome Kit
                </h4>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
              <div className="p-2 md:p-10">
                <img
                  src="images/medical (2).png"
                  alt="Image 1"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="pb-1 md:pb-8">
                <h4 className="text-xs md:text-3xl text-center font-extrabold">
                  Medical Support
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="left-side flex min-h-[650px] bg-siteGreen">
          <div className="smlg bg-siteGreen w-full flex flex-col justify-center items-center">
            <p>RUNA</p>
            <p>THON</p>
          </div>
          <div className="contact bg-siteWhite w-full py-12 px-6">
            <div className="mb-12">
              <h2 className="text-5xl text-center mb-6">Follow Us</h2>
              <div className="logos flex justify-center gap-8">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/coepzest/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform "
                >
                  <FaInstagram className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
                {/* Twitter */}
                <a
                  href="https://x.com/CoepZest24?t=abJe0XPGflvl-Py_WDaUYw&s=08&mx=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaTwitter className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.facebook.com/people/Coep-Zest/100095705100399/?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaFacebook className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.linkedin.com/company/zest-coep/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaLinkedin className="w-10 h-10 text-[#303030] text-opacity-70" />
                </a>
              </div>
            </div>
            <hr className="border-t-2 border-siteGreen my-6" />
            <div className="text-center">
              <h2 className="text-5xl mb-6">For Any Queries, Contact</h2>
              <div className="space-y-6">
                <div className="flex-col items-center gap-4 text-3xl font-medium">
                  <div>Abhishek Ambekar</div>
                  <div className="text-lg text-gray-600">+91 94213 16991</div>
                </div>
                <div className="flex-col items-center gap-4 text-3xl font-medium">
                  <div>Jayesh Awachar</div>
                  <div className="text-lg text-gray-600">+91 8369824221</div>
                </div>
                <div className="flex-col items-center gap-4 text-3xl font-medium">
                  <div>Nagesh Kanchangire</div>
                  <div className="text-lg text-gray-600">+91 9022890253</div>
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-siteGreen my-6" />
            <div className="flex-col justify-center items-center">
              <div className="text-2xl text-center">
                <h3>Copyright © 2025. All Rights Reserved.</h3>
              </div>
              <div className="text-2xl font-light text-center">
                <h3>Designed by ZEST`25</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Marathon;
