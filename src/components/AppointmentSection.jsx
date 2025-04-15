import React, { useState } from 'react';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Book an Appointment</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-yellow-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-yellow-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-yellow-500"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <select
                  name="service"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-yellow-500"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="custom-crafting">Custom Crafting</option>
                  <option value="restoration">Restoration</option>
                  <option value="luxury-finishing">Luxury Finishing</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="repairs">Repairs</option>
                  <option value="design-consultation">Design Consultation</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="mb-2">📞 +1 234 567 890</p>
              <p className="mb-2">✉️ contact@luxecraft.com</p>
              <p className="mb-2">📍 123 Luxury Street, NY 10001</p>
              <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="map-container h-48 bg-gray-800 rounded-lg">
              {/* Google Maps integration would go here */}
              <div className="h-full w-full rounded-lg overflow-hidden">
                <img 
                  src="/images/map.jpg" 
                  alt="Location map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
