import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-[#6B2737] text-[#F5EDE3] py-4 px-6 w-full z-20 shadow-lg sticky top-0">
      <nav className="w-full">
        <ul className="flex justify-center flex-wrap gap-8 text-lg font-playfair">
          <li>
            <Link 
              to="/" 
              className={`hover:text-[#E57A44] transition duration-300 px-3 py-2 rounded-md ${location.pathname === '/' ? 'text-[#E57A44] font-semibold' : ''}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              to="/about" 
              className={`hover:text-[#E57A44] transition duration-300 px-3 py-2 rounded-md ${location.pathname === '/about' ? 'text-[#E57A44] font-semibold' : ''}`}
            >
              About
            </Link>
          </li>

          <li className="relative group">
            <Link 
              to="/services" 
              className={`hover:text-[#E57A44] transition duration-300 px-3 py-2 rounded-md ${location.pathname === '/services' ? 'text-[#E57A44] font-semibold' : ''}`}
            >
              Services
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-30">
              <ul className="bg-[#F5EDE3] text-[#6B2737] p-4 space-y-2 w-64 shadow-xl rounded-lg border-2 border-[#C8A974]">
                <li><Link to="/festive-mehndi" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Festive Mehndi</Link></li>
                <li><Link to="/party-event-mehndi" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Party/Event Mehndi</Link></li>
                <li><Link to="/simple-mehndi" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Simple & Quick Mehndi</Link></li>
                <li><Link to="/arabic-mehndi" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Arabic Mehndi</Link></li>
                <li><Link to="/guest-mehndi" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Mehndi for Guests/Kids</Link></li>
              </ul>
            </div>
          </li>

          <li className="relative group">
            <Link 
              to="/bridal-mehndi-packages" 
              className={`hover:text-[#E57A44] transition duration-300 px-3 py-2 rounded-md ${location.pathname === '/bridal-mehndi-packages' ? 'text-[#E57A44] font-semibold' : ''}`}
            >
              Bridal Packages
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-40">
              <ul className="bg-[#F5EDE3] text-[#6B2737] p-4 space-y-2 w-72 shadow-xl rounded-lg border-2 border-[#C8A974]">
                <li><Link to="/bridal-classic" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Classic Bridal</Link></li>
                <li><Link to="/bridal-royal" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Royal Bridal</Link></li>
                <li><Link to="/bridal-minimal" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Minimalist Bridal</Link></li>
                <li><Link to="/bridal-arabic" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Arabic Bridal</Link></li>
                <li><Link to="/bridal-fusion" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Fusion Bridal</Link></li>
                <li><Link to="/bridal-custom" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Custom Bridal</Link></li>
                <li><Link to="/bridal-premium" className="hover:text-[#E57A44] transition duration-300 block p-2 rounded-md">Premium Experience</Link></li>
              </ul>
            </div>
          </li>

          <li>
            <Link 
              to="/gallery" 
              className={`hover:text-[#E57A44] transition duration-300 px-3 py-2 rounded-md ${location.pathname === '/gallery' ? 'text-[#E57A44] font-semibold' : ''}`}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              className={`hover:text-[#E57A44] transition duration-300 px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'text-[#E57A44] font-semibold' : ''}`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/book-appointment"
              className="bg-[#E57A44] text-[#F5EDE3] font-semibold px-6 py-3 rounded-full hover:bg-[#D2691E] transition duration-300 shadow-lg hover:shadow-xl ml-4 border-2 border-[#C8A974]"
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