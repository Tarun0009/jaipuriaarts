import React from 'react';
import jai from '../jaipuriaimg/jai.jpeg';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: jai, alt: 'Elegant Mehndi design on hands' },
    { id: 2, image: jai, alt: 'Bridal Mehndi full hand' },
    { id: 3, image: jai, alt: 'Intricate foot Mehndi design' },
    { id: 4, image: jai, alt: 'Traditional Rajasthani patterns' },
    { id: 5, image: jai, alt: 'Contemporary floral artwork' },
    { id: 6, image: jai, alt: 'Groom Mehndi' },
    { id: 7, image: jai, alt: 'Festival Mehndi design' },
    { id: 8, image: jai, alt: 'Minimal Arabic style design' }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#6B2737]"> {/* Henna Maroon */}
    {/* Top Divider Line */}
    <div className="h-1 w-full bg-[#C8A974]"></div>
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
