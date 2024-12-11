import "./mara.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

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
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, options);

    // Observe each element with the 'reveal' class
    revealElements.forEach(element => {
      observer.observe(element);
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="">
      {/* Hero Section */}
      <section id="home"></section>

      {/* Theme Section */}
      <section id="theme" className="container">
        <div className="bg-siteGreen py-32">
          <div className="w-full flex p-20 gap-20">
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

      <div className="x">
      {/* Timings and Location */}
      <section id="timings" className="">
        <div className="w-full flex justify-evenly py-40 pt-48 ">
          <div>
            <img className="h-56" src="Time.png" alt="" />
            <div className="py-8">
              <p className="text-center "> TIME </p>
            </div>
          </div>
          <div>
            <img className="h-56" src="Date.webp" alt="" />
            <div className="py-8">
              <p className="text-center "> DATE </p>
            </div>
          </div>
          <div>
            <img className="h-56" src="location-removebg-preview.png" alt="" />
            <div className="py-8">
              <p className="text-center "> LOCATION </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container w-full p-16">
        <div>
          <div>
            <h1 className="reveal">《 CATEGORIES 》</h1>
            <hr className="w-[700px] mx-auto my-5 border-siteGreen border-2"/>
          </div>
          <div className="flex justify-center py-32">
            <div className="card relative rounded-2xl">
              <div className="lines"></div>
              <div className="category_card w-full flex flex-col justify-evenly items-center relative z-5 p-6 max-w-lg rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center">3 KM</h2>
                <h3 className="text-2xl">Fun Run</h3>
                <p className="text-sm">Perfect for beginners and families!</p>
                <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                  Register
                </button>
              </div>
            </div>
            <div className="card relative rounded-2xl">
              <div className="lines"></div>
              <div className="category_card w-full flex flex-col justify-evenly items-center relative z-5 p-6 max-w-lg rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center">5 KM</h2>
                <h3 className="text-2xl">Fitness Run</h3>
                <p className="text-sm">Ideal for team-building and staying active</p>
                <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                  Register
                </button>
              </div>
            </div>
            <div className="card relative rounded-2xl">
              <div className="lines"></div>
              <div className="category_card w-full flex flex-col justify-evenly items-center relative z-5 p-6 max-w-lg rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center">10 KM</h2>
                <h3 className="text-2xl">Challenging Run</h3>
                <p className="text-sm">Push your limits and achieve greatness!</p>
                <button className="mt-10 py-2 px-6 border-[1px] border-[#F0BD1B] rounded-[10px]">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Goodies */}
      <section id="goodies" className="bg-siteGray py-16 w-full">
        <div>
          <h1 className="reveal">《 DELIVERABLES 》</h1>
          <hr className="w-[700px] mx-auto my-5 border-siteGreen border-2"/>
        </div>
        <div className="py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 max-w-[80%] mx-auto">
          <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
            <div className="p-10">
              <img
                src="T-shirt (2).png"
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pb-8">
              <h4 className="text-3xl text-center font-extrabold hover-effect">
                Finishers Medal
              </h4>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
            <div className="p-10">
              <img
                src="medals (2).png"
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pb-8">
              <h4 className="text-3xl text-center font-extrabold">T-shirt</h4>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
            <div className="p-10">
              <img
                src="certificates (2).png"
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pb-8">
              <h4 className="text-3xl text-center font-extrabold">
                Certificates
              </h4>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
            <div className="p-10">
              <img
                src="refreshments (2).png"
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pb-8">
              <h4 className="text-3xl text-center font-extrabold">
                Refreshments
              </h4>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
            <div className="p-10">
              <img
                src="welcome (2).png"
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pb-8">
              <h4 className="text-3xl text-center font-extrabold">
                Welcome Kit
              </h4>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg each-card hover-effect">
            <div className="p-10">
              <img
                src="medical (2).png"
                alt="Image 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pb-8">
              <h4 className="text-3xl text-center font-extrabold">
                Medical Support
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="">
        <div className="container flex min-h-[650px] bg-siteGreen">
          <div className="bg-siteGreen w-full">
            <img src="Screenshot 2024-12-08 205624.png" />
          </div>
          <div className="contact bg-siteWhite w-full py-12 px-6">
            <div className="mb-12">
              <h2 className="text-5xl text-center mb-6">Follow Us</h2>
              <div className="flex justify-center gap-8">
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
              <div className="space-y-6">
                <div className="flex-col items-center gap-4 text-3xl font-medium">
                  <div>Jayesh Awachar</div>
                  <div className="text-lg text-gray-600">+91 90228 90253</div>
                </div>
                <div className="flex-col items-center gap-4 text-3xl font-medium">
                  <div>Adhiraj Ghadge</div>
                  <div className="text-lg text-gray-600">+91 83698 24221</div>
                </div>
                <div className="flex-col items-center gap-4 text-3xl font-medium">
                  <div>Nagesh Kanchangire</div>
                  <div className="text-lg text-gray-600">+91 90045 27329</div>
                </div>
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
