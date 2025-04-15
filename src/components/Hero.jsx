import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[#4B2E2B]">
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E8C76F]">Elegance in Every Stroke</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-white">
          Discover the beauty of traditional Mehndi artistry with a modern touch — perfect for weddings, festivals, and special occasions.
        </p>
        <Link 
          to="/book-appointment" 
          className="bg-[#E8C76F] hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
