import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-[#4B2E2B] text-[#F9F6EF] py-4 px-6 w-full z-20 shadow-md sticky top-0">
      <nav className="w-full mt-4">
        {/* Navigation Links */}
        <ul className="flex justify-center flex-wrap gap-10 text-lg font-medium">
          <li>
            <Link 
              to="/" 
              className={`hover:text-[#E8C76F] transition duration-300 ${location.pathname === '/' ? 'text-[#E8C76F] font-semibold' : ''}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              to="/about" 
              className={`hover:text-[#E8C76F] transition duration-300 ${location.pathname === '/about' ? 'text-[#E8C76F] font-semibold' : ''}`}
            >
              About
            </Link>
          </li>

          <li className="relative group">
            <Link 
              to="/services" 
              className={`hover:text-[#E8C76F] transition duration-300 inline-block ${location.pathname === '/services' ? 'text-[#E8C76F] font-semibold' : ''}`}
            >
              Services
            </Link>
            {/* Main Services Dropdown */}
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-30">
              <ul className="bg-[#3C2415] text-[#F9F6EF] p-4 space-y-2 w-64 shadow-lg rounded-lg border border-[#E8C76F]">
                <li><Link to="/festive-mehndi" className="hover:text-[#E8C76F] transition duration-300">Festive Mehndi</Link></li>
                <li><Link to="/party-event-mehndi" className="hover:text-[#E8C76F] transition duration-300">Party/Event Mehndi</Link></li>
                <li><Link to="/simple-mehndi" className="hover:text-[#E8C76F] transition duration-300">Simple & Quick Mehndi</Link></li>
                <li><Link to="/arabic-mehndi" className="hover:text-[#E8C76F] transition duration-300">Arabic Mehndi</Link></li>
                <li><Link to="/guest-mehndi" className="hover:text-[#E8C76F] transition duration-300">Mehndi for Guests/Kids</Link></li>
              </ul>
            </div>
          </li>

          <li className="relative group">
            <Link 
              to="/bridal-mehndi-packages" 
              className={`hover:text-[#E8C76F] transition duration-300 inline-block ${location.pathname === '/bridal-mehndi-packages' ? 'text-[#E8C76F] font-semibold' : ''}`}
            >
              Bridal Mehndi Packages
            </Link>
            {/* Submenu for Bridal Mehndi Packages */}
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-40">
              <ul className="bg-[#3C2415] text-[#F9F6EF] p-4 space-y-2 w-72 shadow-lg rounded-lg border border-[#E8C76F]">
                <li><Link to="/bridal-classic" className="hover:text-[#E8C76F] transition duration-300">Classic Bridal Package</Link></li>
                <li><Link to="/bridal-royal" className="hover:text-[#E8C76F] transition duration-300">Royal Bridal Package</Link></li>
                <li><Link to="/bridal-minimal" className="hover:text-[#E8C76F] transition duration-300">Minimalist Bridal Package</Link></li>
                <li><Link to="/bridal-arabic" className="hover:text-[#E8C76F] transition duration-300">Arabic Bridal Package</Link></li>
                <li><Link to="/bridal-fusion" className="hover:text-[#E8C76F] transition duration-300">Fusion Bridal Package</Link></li>
                <li><Link to="/bridal-custom" className="hover:text-[#E8C76F] transition duration-300">Full Custom Bridal Package</Link></li>
                <li><Link to="/bridal-premium" className="hover:text-[#E8C76F] transition duration-300">Premium Bridal Experience</Link></li>
              </ul>
            </div>
          </li>

          <li>
            <Link 
              to="/gallery" 
              className={`hover:text-[#E8C76F] transition duration-300 ${location.pathname === '/gallery' ? 'text-[#E8C76F] font-semibold' : ''}`}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              className={`hover:text-[#E8C76F] transition duration-300 ${location.pathname === '/contact' ? 'text-[#E8C76F] font-semibold' : ''}`}
            >
              Contact
            </Link>
          </li>

          <li>
          <Link
  to="/book-appointment"
  className="bg-[#4B2E2B] text-[#E8C76F] border border-[#E8C76F] border-b-4 font-medium px-6 py-3 rounded-md hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300"
>
  Book Appointment
</Link>

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
