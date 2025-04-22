import { useState } from "react";
import Modal from "react-modal";

import jai1 from "../jaipuriaimg/jai1.jpeg";
import jai2 from "../jaipuriaimg/jai2.jpeg";
import jai3 from "../jaipuriaimg/jai3.jpeg";
import jai4 from "../jaipuriaimg/jai4.jpeg";

Modal.setAppElement("#root"); // Set your app root element

export default function Gallery() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [jai1, jai2, jai3, jai4];

  const openVideo = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const openImage = (imgUrl) => {
    setActiveImage(imgUrl);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="bg-[#FFF7F5] py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* 📷 Photo Gallery */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6B2737] mb-4">Photo Gallery</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            A glimpse of our elegant mehndi designs captured in their finest moments.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`mehndi-${index}`}
                onClick={() => openImage(img)}
                className="rounded-lg shadow cursor-pointer hover:scale-105 transition duration-300"
              />
            ))}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6B2737] mb-4">Video Gallery</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Watch our creative process and stunning bridal transformations in action.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openVideo("https://www.youtube.com/embed/yourvideoid1")}
            >
              <img src="/gallery/video-thumb1.jpg" alt="video1" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openVideo("https://www.youtube.com/embed/yourvideoid2")}
            >
              <img src="/gallery/video-thumb2.jpg" alt="video2" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <a
            href="#video-gallery"
            className="inline-block mt-4 text-sm sm:text-base text-[#6B2737] font-medium underline hover:text-[#A8425C] transition"
          >
            Watch More Videos →
          </a>
        </div>
      </div>

      {/* Lightbox for Image */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={activeImage}
            alt="Lightbox"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-xl"
          />
        </div>
      )}

      {/* Modal for Video */}
      <Modal
        isOpen={videoModalOpen}
        onRequestClose={() => setVideoModalOpen(false)}
        className="max-w-4xl mx-auto my-20 bg-white rounded-lg shadow-lg overflow-hidden"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <div className="relative">
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold z-50"
          >
            ×
          </button>
          <iframe
            src={videoUrl}
            className="w-full h-[400px]"
            allowFullScreen
            title="Video Preview"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
}
