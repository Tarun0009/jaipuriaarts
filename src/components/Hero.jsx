import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, Instagram, Facebook, Twitter,MessageCircle  } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import jai1 from "../jaipuriaimg/jai1.jpeg";
import jai2 from "../jaipuriaimg/jai2.jpeg";
import jai3 from "../jaipuriaimg/jai3.jpeg";
import jai4 from "../jaipuriaimg/jai4.jpeg";

const slides = [
  {
    image: jai1,
    title: "Bridal Mehndi",
    description:
      "Celebrate your big day with elegant, personalized bridal mehndi designs crafted to perfection. From intricate patterns to symbolic motifs, make your wedding truly memorable.",
    bgColor: "#FDF6F9",
    shape: "rounded-3xl",
  },
  {
    image: jai2,
    title: "Festive Designs",
    description:
      "Get festive-ready with modern and traditional mehndi styles for all occasions. Whether it's Diwali, Karva Chauth, or Eid, we’ve got the perfect design for you.",
    bgColor: "#FFF7ED",
    shape: "rounded-full",
  },
  {
    image: jai3,
    title: "Elegant Detailing",
    description:
      "We focus on precision and detail to ensure your mehndi is nothing short of a masterpiece. Every stroke is carefully drawn to enhance your beauty and style.",
    bgColor: "#F2FAF6",
    shape: "rounded-md",
  },
  {
    image: jai4,
    title: "Custom Artwork",
    description:
      "Bring your vision to life with our bespoke mehndi art tailored just for you. We design as per your story, your style, and your celebration.",
    bgColor: "#FAF4F0",
    shape: "rounded-[40%]",
  },
];

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
  }, [selectedIndex]);

  return (
    <>
      <section
        className="relative w-full h-screen min-h-[600px] overflow-hidden z-10"
        role="region"
        aria-label="Mehndi Carousel Hero Section"
      >
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="p-3 bg-white/70 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ArrowLeft className="text-[#6B2737] w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="p-3 bg-white/70 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ArrowRight className="text-[#6B2737] w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {isMounted && (
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            speed={800}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="h-full w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full w-full flex items-center justify-center px-4 sm:px-8 lg:px-12"
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="text-center lg:text-left max-w-xl">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#6B2737]">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg text-gray-700 mb-6">
                        {slide.description}
                      </p>
                      <button className="px-6 py-3 bg-[#6B2737] hover:bg-[#551c2b] text-white rounded-full transition font-medium shadow-lg">
                        Book Now
                      </button>
                    </div>

                    {/* Right Image Content */}
                    <div
                      className={`relative w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px] border-4 border-[#6B2737] shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer ${slide.shape}`}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <img
                        src={slide.image}
                        loading="lazy"
                        alt={`${slide.title} Mehndi Design`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Modal Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-[9999] flex flex-col items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              aria-label="Close Image Modal"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>

            <img
              src={slides[selectedIndex].image}
              loading="lazy"
              alt={`${slides[selectedIndex].title} Full View`}
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-xl mb-6"
            />

            <div className="flex gap-3 overflow-x-auto max-w-full pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
              {slides.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide.image}
                  loading="lazy"
                  alt={`Thumbnail of ${slide.title}`}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                    idx === selectedIndex
                      ? "border-white scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </section>
{/* 🟡 About Section */}
<section className="bg-[#6B2737] py-10 px-4 sm:px-6 lg:px-12">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 border border-gray-200 rounded-xl shadow-md overflow-hidden">

    {/* Left Column - About Jaipuria Arts */}
    <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FFF7F5]">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6B2737] mb-3">
          Welcome to Jaipuria Arts
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          At Jaipuria Arts, we craft timeless mehndi designs that blend tradition with creativity. From bridal elegance to festive flair, our artistry reflects your unique story.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-[#6B2737] mb-2">Why Choose Us?</h3>
        <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm sm:text-base">
          <li>Expert team with years of experience</li>
          <li>Custom and modern mehndi styles</li>
          <li>High-quality, skin-safe natural henna</li>
          <li>On-time service and seamless booking</li>
        </ul>
      </div>
    </div>

    {/* Right Column - Bridal Packages and Contact Info */}
    <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FFFDFB]">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#6B2737] mb-3">
          Explore Our Bridal Packages
        </h3>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Our bridal mehndi services are designed to meet your style and preferences. Choose a package that fits your special day perfectly:
        </p>
        <ul className="space-y-2 text-[#6B2737] font-medium underline underline-offset-4 text-sm sm:text-base">
          <li><a href="#classic-package" className="hover:text-[#A8425C]">Classic Bridal Package</a></li>
          <li><a href="#premium-package" className="hover:text-[#A8425C]">Premium Bridal Package</a></li>
          <li><a href="#royal-package" className="hover:text-[#A8425C]">Royal Bridal Package</a></li>
          <li><a href="#family-package" className="hover:text-[#A8425C]">Family Mehndi Package</a></li>
        </ul>
      </div>

      {/* Social & Contact */}
      <div className="mt-6">
        <p className="text-gray-600 text-sm mb-1">
          📞 <span className="font-medium text-[#6B2737]">+91 9876543210</span> | 
          📧 <span className="font-medium text-[#6B2737] ml-1">contact@jaipuriaarts.com</span>
        </p>
        <div className="flex gap-3 mt-2 text-[#6B2737] text-xl">
          <a href="#" aria-label="Instagram" className="hover:text-[#A8425C]"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-[#A8425C]"><FaFacebookF /></a>
          <a href="#" aria-label="WhatsApp" className="hover:text-[#A8425C]"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Book Button */}
      <div className="mt-8">
        <button className="bg-[#6B2737] text-white px-5 py-2.5 rounded-full shadow hover:bg-[#A8425C] transition duration-300 text-sm sm:text-base">
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</section>

{/* 🟢 Quick Services Section */}
<section className="bg-[#6B2737] py-6 sm:py-10 px-4 sm:px-8 lg:px-24">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#C8A974] mb-6">Our Quick Services</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

      {/* Service Card */}
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B2737] font-semibold text-sm sm:text-base mb-1">Festive Mehndi</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">Elegant designs for festive occasions</p>
        </div>
        <a
          href="#festive"
          className="text-[#6B2737] text-xs sm:text-sm font-medium underline hover:text-[#A8425C] transition"
        >
          Learn More →
        </a>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B2737] font-semibold text-sm sm:text-base mb-1">Party/Event Mehndi</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">Chic styles for every occasion</p>
        </div>
        <a
          href="#party-event"
          className="text-[#6B2737] text-xs sm:text-sm font-medium underline hover:text-[#A8425C] transition"
        >
          Learn More →
        </a>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B2737] font-semibold text-sm sm:text-base mb-1">Simple & Quick Mehndi</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">Quick, beautiful designs for any day</p>
        </div>
        <a
          href="#simple-quick"
          className="text-[#6B2737] text-xs sm:text-sm font-medium underline hover:text-[#A8425C] transition"
        >
          Learn More →
        </a>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B2737] font-semibold text-sm sm:text-base mb-1">Arabic Mehndi</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">Intricate and beautiful Arabic designs</p>
        </div>
        <a
          href="#arabic"
          className="text-[#6B2737] text-xs sm:text-sm font-medium underline hover:text-[#A8425C] transition"
        >
          Learn More →
        </a>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B2737] font-semibold text-sm sm:text-base mb-1">Mehndi for Guests/Kids</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">Fun and simple mehndi for all ages</p>
        </div>
        <a
          href="#guests-kids"
          className="text-[#6B2737] text-xs sm:text-sm font-medium underline hover:text-[#A8425C] transition"
        >
          Learn More →
        </a>
      </div>

      {/* Bridal Mehndi Package */}
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B2737] font-semibold text-sm sm:text-base mb-1">Bridal Mehndi Package</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3">Comprehensive bridal mehndi services</p>
        </div>
        <a
          href="#bridal-package"
          className="text-[#6B2737] text-xs sm:text-sm font-medium underline hover:text-[#A8425C] transition"
        >
          Learn More →
        </a>
      </div>

    </div>
  </div>
</section>



{/* 🟣 Gallery & Video Section */}
<section className="bg-[#FFF7F5] py-8 px-4 sm:px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">

    {/* 📷 Photo Gallery */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#6B2737] mb-3">Photo Gallery</h2>
      <p className="text-gray-600 text-sm sm:text-base mb-3">
        A glimpse of our elegant mehndi designs captured in their finest moments.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <img
          src={jai1}
          alt="Intricate Bridal Mehndi Design 1"
          className="rounded-md shadow-md hover:scale-105 transition duration-300 w-full h-auto object-cover"
        />
        <img
          src={jai2}
          alt="Beautiful Hand Mehndi Pattern 2"
          className="rounded-md shadow-md hover:scale-105 transition duration-300 w-full h-auto object-cover"
        />
        <img
          src={jai3}
          alt="Traditional Mehndi Artwork 3"
          className="rounded-md shadow-md hover:scale-105 transition duration-300 w-full h-auto object-cover"
        />
        <img
          src={jai4}
          alt="Elegant Bridal Mehndi Design 4"
          className="rounded-md shadow-md hover:scale-105 transition duration-300 w-full h-auto object-cover"
        />
        <img
          src={jai1}
          alt="Creative Mehndi Style 5"
          className="rounded-md shadow-md hover:scale-105 transition duration-300 w-full h-auto object-cover"
        />
        <img
          src={jai2}
          alt="Modern Mehndi Design 6"
          className="rounded-md shadow-md hover:scale-105 transition duration-300 w-full h-auto object-cover"
        />
      </div>
      <a
        href="#full-gallery"
        className="inline-block mt-4 text-sm sm:text-base text-[#6B2737] font-medium underline hover:text-[#A8425C] transition"
      >
        View Full Gallery →
      </a>
    </div>

    {/* 🎥 Video Gallery */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#6B2737] mb-3">Video Gallery</h2>
      <p className="text-gray-600 text-sm sm:text-base mb-3">
        Watch our creative process and stunning bridal transformations in action.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/yourvideoid${num}`}
              title={`Bridal Mehndi Video ${num}`}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
      <a
        href="#video-gallery"
        className="inline-block mt-4 text-sm sm:text-base text-[#6B2737] font-medium underline hover:text-[#A8425C] transition"
      >
        Watch More Videos →
      </a>
    </div>

  </div>
</section>


 {/*Contact SECTION*/}
<section className="bg-[#6B2737] py-8 px-4 sm:px-6 lg:px-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
      Get in Touch & Find Us Across India
    </h2>
    <p className="text-white text-sm md:text-base mb-8 max-w-2xl mx-auto">
      We bring exquisite mehndi artistry to your doorstep. Contact us or explore the cities we serve!
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
      {/* Quick Contact */}
      <div className="bg-white max-w-sm mx-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 text-center">
        <h3 className="text-lg font-semibold text-[#6B2737] mb-2">Quick Contact</h3>
        <p className="text-gray-600 text-sm mb-4">Reach out for bookings, collaborations, or general inquiries.</p>
        <div className="text-sm font-medium text-[#6B2737] space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Phone size={16} className="text-[#6B2737]" />
            <a href="tel:+919717862329" className="hover:text-[#8D3B4F] transition">+91 9717862329</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail size={16} className="text-[#6B2737]" />
            <a href="mailto:tarunpratapsingh097@gmail.com" className="hover:text-[#8D3B4F] transition">tarunpratapsingh097@gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageCircle size={16} className="text-[#6B2737]" />
            <a
              href="https://wa.me/919717862329"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8D3B4F] transition"
            >
              WhatsApp Chat
            </a>
          </div>
          <div className="flex justify-center gap-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8D3B4F] transition">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8D3B4F] transition">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8D3B4F] transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Service Locations */}
      <div className="bg-white max-w-sm mx-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 text-center">
        <h3 className="text-lg font-semibold text-[#6B2737] mb-2">We Serve In</h3>
        <p className="text-gray-600 text-sm mb-4">Available for bookings across cities for weddings, parties & more.</p>
        <ul className="text-left text-[#6B2737] text-sm font-medium space-y-1 mb-4">
          <li>• Noida & Greater Noida</li>
          <li>• Delhi NCR</li>
          <li>• Ghaziabad & Meerut</li>
          <li>• Lucknow & Kanpur</li>
          <li>• Jaipur, Chandigarh, and more</li>
        </ul>
        <a
          href="/booking"
          className="inline-block py-1.5 px-5 bg-[#6B2737] text-white rounded-full text-sm hover:bg-[#8D3B4F] transition"
        >
          Book Your City
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
