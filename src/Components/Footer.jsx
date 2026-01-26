import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 🔹 University Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/img.png"
              alt="PMAS Arid University Logo"
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-xl font-bold leading-tight">
              University Institute of Information Technology
              <br />
              <span className="text-sm font-medium text-green-200">
                Rawalpindi, Pakistan
              </span>
            </h3>
          </div>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-green-600 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#overview"
                className="hover:text-yellow-300 transition-colors"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#fyp-registration"
                className="hover:text-yellow-300 transition-colors"
              >
                FYP Registration
              </a>
            </li>
            <li>
              <a
                href="#position-holders"
                className="hover:text-yellow-300 transition-colors"
              >
                Position Holders
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* 🔹 Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-green-600 pb-2">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>
              <i className="fa-solid fa-location-dot text-yellow-400 mr-2"></i>
              Shamsabad, Muree Road, Rawalpindi
            </li>
            <li>
              <i className="fa-solid fa-phone text-yellow-400 mr-2"></i>
            </li>
            <li>
              <i className="fa-solid fa-envelope text-yellow-400 mr-2"></i>
              info@uaar.edu.pk
            </li>
          </ul>
        </div>

        {/* 🔹 Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 border-b border-green-600 pb-2">
            Follow Us
          </h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.uaar.edu.pk"
              target="_blank"
              className="hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-sm text-green-200">
        © {new Date().getFullYear()} PMAS-Arid Agriculture University
        Rawalpindi. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
