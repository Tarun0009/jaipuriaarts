import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import jai1 from '../jaipuriaimg/jai1.jpeg';
import jai2 from '../jaipuriaimg/jai2.jpeg';
import jai3 from '../jaipuriaimg/jai3.jpeg';

const HeroSection = () => {
  const images = [jai1, jai2, jai3];

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full w-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="max-w-full max-h-full object-contain mx-auto"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
