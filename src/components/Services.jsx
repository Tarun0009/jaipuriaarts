import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandSparkles,
  faLeaf,
  faSpa,
  faGem,
  faBrush,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="p-6 rounded-lg border-b-4 text-center transition-all duration-300 bg-[#F5EDE3] border-[#6B2737] hover:bg-[#F8F3EC]">
      <div className="mb-4 text-[#6B2737]">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#6B2737]">
        {title}
      </h3>
      <p className="text-[#333333]">
        {description}
      </p>
      <a
        href={link}
        className="mt-4 inline-block font-medium text-[#6B2737] transition duration-300 hover:text-[#E57A44]"
      >
        Learn More
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: faHandSparkles,
      title: "Bridal Mehndi",
      description: "Intricate and elegant designs tailored for brides on their special day.",
      link: "#bridal-mehndi"
    },
    {
      icon: faLeaf,
      title: "Festive Mehndi",
      description: "Celebrate festivals with beautiful and quick mehndi designs.",
      link: "#festive-mehndi"
    },
    {
      icon: faSpa,
      title: "Guest Mehndi",
      description: "Light and classy designs for guests attending weddings or events.",
      link: "#guest-mehndi"
    },
    {
      icon: faGem,
      title: "Premium Package",
      description: "Luxury mehndi experience with detailed designs and add-ons.",
      link: "#premium-package"
    },
    {
      icon: faBrush,
      title: "Custom Designs",
      description: "Get your design personalized based on themes, names, and stories.",
      link: "#custom-designs"
    },
    {
      icon: faHeart,
      title: "Engagement & Baby Shower",
      description: "Make your pre-wedding or baby celebrations memorable with unique art.",
      link: "#engagement-baby-shower"
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#6B2737]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#E8C76F]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
