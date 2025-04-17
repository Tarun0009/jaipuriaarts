// Topbar.js
import React from 'react';
import logo from '../jaipuriaimg/jaipuriaarts.jpeg';
import Pattern from './Pattern';

const Topbar = () => {
  return (
    <Pattern>
      <header className="bg-[#6B2737] shadow-lg py-4"> {/* Henna Stain maroon */}
        <div className="container mx-auto flex justify-center items-center">
          {/* Logo with gold border */}
          <img
            src={logo}
            alt="Jaipuria Mehndi Logo"
            className="w-16 h-16 mr-5 rounded-full md:w-20 md:h-20 border-4 border-[#C8A974] shadow-lg"
          />

          {/* Website Name */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#E8C76F] 
  hover:text-transparent transition-all duration-300
  bg-gradient-to-r from-[#C8A974] via-[#E57A44] to-[#C8A974] 
  bg-clip-text hover:bg-gradient-to-l
  font-playfair tracking-wide
  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
  relative pb-2
  after:content-[''] after:absolute after:bottom-0 after:left-0 
  after:w-full after:h-[2px] after:bg-[#E57A44] after:origin-bottom-right 
  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
  Jaipuria Arts
</h1>
        </div>
      </header>
    </Pattern>
  );
};

export default Topbar;