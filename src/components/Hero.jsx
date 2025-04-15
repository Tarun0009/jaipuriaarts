import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[url('/images/hero/mehndi-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Elegance in Every Stroke</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-ivory">
          Discover the beauty of traditional Mehndi artistry with a modern touch — perfect for weddings, festivals, and special occasions.
        </p>
        <Link 
          to="/book-appointment" 
          className="bg-primary hover:bg-gold text-black font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
