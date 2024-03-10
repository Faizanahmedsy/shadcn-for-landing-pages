import React from "react";

const FooterV3 = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-teal-800 mb-2">Road Craft</h2>
          <p className="text-sm">Building a Sustainable Future</p>
        </div>

        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h3 className="text-lg font-bold text-teal-800 mb-3">Contact Us</h3>
          <p className="text-sm">+91 9876543210</p>
          <p className="text-sm">info@roadcraft.com</p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-teal-800 mb-3">Quick Links</h3>
          <a href="/about" className="text-sm hover:text-teal-800 mb-2">
            About Us
          </a>
          <a href="/services" className="text-sm hover:text-teal-800 mb-2">
            Our Services
          </a>
          <a href="/projects" className="text-sm hover:text-teal-800 mb-2">
            Projects
          </a>
          {/* Add more links as needed */}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-teal-800 mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-teal-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-800">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Get in touch with us for any queries or feedback:
        </p>
        <div className="flex items-center justify-center mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="py-2 px-4 mr-2 border border-teal-800 rounded-md focus:outline-none"
          />
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none">
            Submit
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Road Craft. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterV3;
