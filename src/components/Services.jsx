import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandSparkles, faLeaf, faSpa, faGem,
  faBrush, faHeart
} from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-[#4B2E2B] p-6 rounded-lg border border-[#E8C76F] border-b-4 text-center hover:brightness-110 transition duration-300">
      <div className="text-[#E8C76F] mb-4">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#E8C76F]">{title}</h3>
      <p className="text-white">{description}</p>
      <a
        href={link}
        className="text-[#E8C76F] mt-4 inline-block font-medium transition duration-300 hover:underline"
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
    <section id="services" className="py-16 bg-[#4B2E2B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#E8C76F]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
