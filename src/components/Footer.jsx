import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4B2E2B] text-[#FBECD8] pt-0">
      {/* Top Horizontal Line Divider */}
      <div className="h-1 w-full bg-[#E8C76F]"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="company-info">
            <h3 className="text-xl font-bold mb-4 text-[#E8C76F]">JAIPURIA ARTS</h3>
            <p className="text-[#FBECD8] mb-4">
              Celebrating tradition through beautiful mehndi designs and artistic excellence.
            </p>
            <div className="social-icons flex space-x-4">
              {[
                { icon: faFacebookF, url: 'https://facebook.com' },
                { icon: faTwitter, url: 'https://twitter.com' },
                { icon: faInstagram, url: 'https://instagram.com' },
                { icon: faLinkedinIn, url: 'https://linkedin.com' },
              ].map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, "_blank")}
                  className="w-8 h-8 rounded-full bg-[#5C3A32] flex items-center justify-center hover:bg-[#E8C76F] hover:text-[#4B2E2B] transition duration-300 shadow-md"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="text-xl font-bold mb-4 text-[#E8C76F]">Quick Links</h3>
            <ul className="space-y-2 text-[#FBECD8]">
              <li><Link to="/about" className="hover:text-[#FFD700] transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#FFD700] transition duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FFD700] transition duration-300">Portfolio</Link></li>
              <li><Link to="/shop" className="hover:text-[#FFD700] transition duration-300">Shop Now</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFD700] transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-4 text-[#E8C76F]">Contact</h3>
            <ul className="space-y-2 text-[#FBECD8]">
              <li>123 Mehndi Lane</li>
              <li>Noida, UP 201301</li>
              <li>+91 9876543210</li>
              <li>contact@jaipuriaarts.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <h3 className="text-xl font-bold mb-4 text-[#E8C76F]">Newsletter</h3>
            <p className="text-[#FBECD8] mb-4">Subscribe to stay updated with our latest mehndi designs!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#5C3A32] text-white border-none p-2 w-full focus:outline-none focus:ring-1 focus:ring-[#E8C76F]"
              />
              <button className="bg-[#E8C76F] hover:bg-[#FFD700] text-[#4B2E2B] px-4 transition duration-300">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#5C3A32] mt-8 pt-8 text-center text-[#FBECD8]">
          <p>© 2025 Jaipuria Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
