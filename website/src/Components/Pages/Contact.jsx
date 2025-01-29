import React, { useState,useRef,useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const scriptURL = "https://script.google.com/macros/s/AKfycby_0rfh_bh3Eo0wBaWs5LdE3EjP0S2DagXiZdk-PSg-TyV85_kMlvqGXmMfhYT1sLBg/exec"; // Replace with actual URL
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      console.log("Form submitted:", formData);
      alert("Thank you for your message!");
  
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
  
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again!");
    }
  };

  const headerRef = useRef(null); // Create a reference for the "Sponsors" text
  
      useEffect(() => {
          // GSAP animation for the header
          gsap.fromTo(
              headerRef.current, 
              { y: 40, opacity: 0 }, 
              { y: 0, opacity: 1, duration: 2.5
              , ease: "power3.out" } 
          );
      }, []);

  return (
    
    <div
  className="min-h-screen bg-gray-100 py-4 px-2 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/ContactBG.jpg')" }}
>
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold text-center text-white mb-8" ref={headerRef}>Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-black bg-opacity-65 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ease-in-out">
            <h2 className="text-xl font-semibold mb-4 text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-600 text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-4 rounded-lg shadow-lg hover:from-gray-900 hover:to-gray-700 transition-transform transform hover:scale-105 duration-300 focus:outline-none mb-2"  style={{ color: 'white !important' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8 ">
            {/* Contact Info */}
            <div className="bg-black bg-opacity-65 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ease-in-out">
              <h2 className="text-xl font-semibold mb-4 text-white">Contact Information</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-white">Address</h3>
                  <p className="text-white">Zest Office, Shivaji Nagar, Pune-411005</p>
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="text-white" >7385892082</p>
                  
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-white">zs.zest@coep.ac.in</p>
                </div>
                
                {/* Social Media Links */}
                <div className="pt-4">
                  <h3 className="font-medium text-gray-800 mb-2 text-white">Follow Us</h3>
                  <div className="flex space-x-4">
                    
                    
                    <a href="https://www.instagram.com/coepzest/" target="_blank" className="text-blue-500 hover:text-blue-600"><img src="/images/instagram.png" style={{ width: "40px", height: "40px", padding: '0', margin: '0', objectFit: 'contain' }}></img></a>
                    <a href="https://www.linkedin.com/company/zest-coep/posts/?feedView=all" target="_blank" className="text-blue-500 hover:text-blue-600"><img src="/images/LinkedInIcon.png" style={{ width: "40px", height: "40px", padding: '0', margin: '0', objectFit: 'contain' }}></img></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-black bg-opacity-65 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ease-in-out">
              <h2 className="text-xl font-semibold mb-4 text-white">Find Us</h2>
              <div className="w-full h-64 bg-gray-200 rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60533.68553594103!2d73.87302991225586!3d18.512837463138496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0627ac5aaad%3A0xe1e8f57268337604!2sZEST%20Office!5e0!3m2!1sen!2sin!4v1738149332298!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;