import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: '/images/portfolio/item1.jpg', alt: 'Elegant Mehndi design on hands' },
    { id: 2, image: '/images/portfolio/item2.jpg', alt: 'Bridal Mehndi full hand' },
    { id: 3, image: '/images/portfolio/item3.jpg', alt: 'Intricate foot Mehndi design' },
    { id: 4, image: '/images/portfolio/item4.jpg', alt: 'Traditional Rajasthani patterns' },
    { id: 5, image: '/images/portfolio/item5.jpg', alt: 'Contemporary floral artwork' },
    { id: 6, image: '/images/portfolio/item6.jpg', alt: 'Groom Mehndi' },
    { id: 7, image: '/images/portfolio/item7.jpg', alt: 'Festival Mehndi design' },
    { id: 8, image: '/images/portfolio/item8.jpg', alt: 'Minimal Arabic style design' }
  ];

  return (
    <section id="gallery" className="py-16 bg-[#4B2E2B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#E8C76F]">Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map(item => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-[#E8C76F]"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
