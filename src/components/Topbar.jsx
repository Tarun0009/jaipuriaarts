import React from 'react';
import logo from '../jaipuriaimg/jaipuriaarts.jpeg';

const Topbar = () => {
  return (
    <header className="bg-[#4B2E2B] shadow-md py-6">
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Website Logo"
          className="w-20 h-20 mr-5 rounded-full md:w-24 md:h-24 border-4 border-white shadow-lg"
        />

        {/* Website Name */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#E8C76F] hover:text-[#FFD700] transition-all font-[cursive] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] italic">
  Jaipuria Arts
</h1>

      </div>
    </header>
  );
};

export default Topbar;
