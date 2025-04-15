import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send to an API or email service)
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section py-16 bg-ivory text-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          Have any questions or want to book a Mehndi session? Feel free to reach out to us!
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-gray-700 font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700 font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="phone" className="text-gray-700 font-semibold">Your Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="text-gray-700 font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg mt-2"
              rows="4"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-primary hover:bg-gold text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
