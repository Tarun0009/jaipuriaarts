import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../jaipuriaimg/jaipuriaarts.jpeg';

const Footer = () => {
  return (
    <footer className="pt-0 bg-[#1C1C1C]">
      {/* Top Divider Line */}
      <div className="h-1 w-full bg-[#C8A974]"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="company-info">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Jaipuria Arts Logo"
                className="w-12 h-12 rounded-full object-cover mr-3 border border-[#C8A974]"
              />
              <h3 className="text-xl font-bold text-[#C8A974]">JAIPURIA ARTS</h3>
            </div>
            <p className="text-[#E5E5E5] mb-4">
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
                  className="w-8 h-8 rounded-full flex items-center justify-center transition duration-300 shadow-md bg-[#333333] text-[#C8A974] hover:bg-[#C8A974] hover:text-[#1C1C1C]"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="text-xl font-bold mb-4 text-[#C8A974]">Quick Links</h3>
            <ul className="space-y-2 text-[#E5E5E5]">
              <li><Link to="/about" className="hover:text-[#C8A974] transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#C8A974] transition duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#C8A974] transition duration-300">Portfolio</Link></li>
              <li><Link to="/shop" className="hover:text-[#C8A974] transition duration-300">Shop Now</Link></li>
              <li><Link to="/contact" className="hover:text-[#C8A974] transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-4 text-[#C8A974]">Contact</h3>
            <ul className="space-y-2 text-[#E5E5E5]">
              <li>123 Mehndi Lane</li>
              <li>Noida, UP 201301</li>
              <li>+91 9876543210</li>
              <li>contact@jaipuriaarts.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <h3 className="text-xl font-bold mb-4 text-[#C8A974]">Newsletter</h3>
            <p className="text-[#E5E5E5] mb-4">
              Subscribe to stay updated with our latest mehndi designs!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#333333] text-[#E5E5E5] focus:ring-[#C8A974] border-none p-2 w-full focus:outline-none focus:ring-1"
              />
              <button className="bg-[#C8A974] hover:bg-[#E57A44] text-[#1C1C1C] px-4 transition duration-300">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#333333] mt-8 pt-8 text-center text-[#B0B0B0]">
          <p>© 2025 Jaipuria Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
