import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      role: "Bride",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      alt: "Ayesha Khan - Bride",
      feedback:
        "The mehndi designs were breathtaking. So intricate and elegant—exactly what I dreamed of!",
      rating: "★★★★★",
    },
    {
      name: "Ritika Sharma",
      role: "Bride’s Sister",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      alt: "Ritika Sharma - Bride’s Sister",
      feedback:
        "Very professional and punctual. The artistry and attention to detail were simply next level!",
      rating: "★★★★★",
    },
    {
      name: "Simran Bedi",
      role: "Bride’s Friend",
      video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      alt: "Simran Bedi - Bride’s Friend",
      feedback:
        "Watch my full experience—it was beyond amazing! Her mehndi made my friend’s wedding extra magical.",
      rating: "★★★★★",
    },
    {
      name: "Meera Rajput",
      role: "Bride",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      alt: "Meera Rajput - Bride",
      feedback:
        "Everyone kept complimenting my mehndi! Thank you for making my day extra special.",
      rating: "★★★★★",
    },
    {
      name: "Preeti Gupta",
      role: "Bride’s Friend",
      video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      alt: "Preeti Gupta - Bride’s Friend",
      feedback:
        "Amazing mehndi designs! The experience was unforgettable and her team made the day special.",
      rating: "★★★★★",
    },
    {
      name: "Neha Singh",
      role: "Bride’s Sister",
      video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      alt: "Neha Singh - Bride’s Sister",
      feedback:
        "Highly recommended! The mehndi designs were exquisite, and the entire experience was seamless.",
      rating: "★★★★★",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView >= testimonials.length ? 0 : prev + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section
      id="testimonials"
      className="bg-[#6B2737] py-14 px-4 sm:px-8 lg:px-16 relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Client Testimonials
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Hear from our happy clients who trusted us with their special moments.
          Their words say it all.
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-[#C8A974] p-2 rounded-full shadow hover:scale-110 transition"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 h-[420px] shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <div className="w-full flex justify-center mb-4">
                  {testimonial.video ? (
                    <iframe
                      width="100%"
                      height="200"
                      src={testimonial.video}
                      title={`Testimonial from ${testimonial.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-md"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-40 h-40 sm:w-44 sm:h-44 rounded-md border-4 border-[#6B2737] shadow-md object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#6B2737]">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 mb-1">{testimonial.role}</p>
                <p className="text-sm text-gray-700 italic mb-2 px-1 sm:px-2">
                  {testimonial.feedback}
                </p>
                <div className="mt-1 text-yellow-400 text-base">
                  {testimonial.rating}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-[#C8A974] p-2 rounded-full shadow hover:scale-110 transition"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
