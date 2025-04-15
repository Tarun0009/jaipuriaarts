import React from 'react';

const About = () => {
  return (
    <section className="about-section py-16 bg-ivory text-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">About JaipuriaArts</h2>
        <p className="text-lg text-gray-700 mb-6">
          At JaipuriaArts, we specialize in bringing traditional Mehndi artistry to life with a modern touch.
          Our experienced artisans craft intricate designs for every occasion, from weddings to festivals, ensuring
          that every design tells a unique story.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="image-container">
            <img src="/images/about-image.jpg" alt="Mehndi Art" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="text-container">
            <h3 className="text-xl font-semibold text-primary mb-4">Our Values</h3>
            <p className="text-gray-700 mb-4">
              We value creativity, precision, and customer satisfaction. Our goal is to make every design
              memorable, combining artistry with the highest quality service.
            </p>
            <p className="text-gray-700">
              With years of experience, we have built a reputation for our expertise and dedication to
              every client’s vision. Whether it's a traditional design or something custom, our mission is
              to make every event special with our beautiful Mehndi art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
