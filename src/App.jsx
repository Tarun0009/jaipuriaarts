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
      <hr className="h-1 bg-gradient-to-r from-[#E8C76F] via-[#C19A6B] to-[#4B2E2B] border-0 rounded-full " />
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
