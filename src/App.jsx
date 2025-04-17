import Topbar from './components/Topbar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/Services';
import BridalMehndi from './pages/BridalMehndi';
import Gallery from './components/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';  
import FestiveMehndi from './pages/FestiveMehndi';
import PartyEventMehndi from './pages/PartyEventMehndi';
import SimpleMehndi from './pages/SimpleQuickMehndi';
import ArabicMehndi from './pages/ArabicMehndi';
import GuestMehndi from './pages/GuestMehndi';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <>
      <Topbar />
      {/* Horizontal line between topbar and navbar */}
      <hr className="h-1.5 bg-gradient-to-r from-[#6B2737] via-[#E57A44] to-[#4B2E2B] border-0 rounded-full 
             shadow-[0_2px_4px_rgba(0,0,0,0.1)] 
             animate-line-expand origin-left
             transition-all duration-1000 ease-out
             group-hover:via-[#C8A974] group-hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)]" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/bridal-mehndi-packages" element={<BridalMehndi />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Mehndi Services Routes */}
          <Route path="/festive-mehndi" element={<FestiveMehndi />} />
          <Route path="/party-event-mehndi" element={<PartyEventMehndi />} />
          <Route path="/simple-mehndi" element={<SimpleMehndi />} />
          <Route path="/arabic-mehndi" element={<ArabicMehndi />} />
          <Route path="/guest-mehndi" element={<GuestMehndi />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
