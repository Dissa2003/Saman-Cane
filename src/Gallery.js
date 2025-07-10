import React, { useState } from "react";

// Import all images from the background folder
import img1 from "./background/WhatsApp Image 2025-07-04 at 3.36.05 PM (1).jpeg";
import img2 from "./background/WhatsApp Image 2025-07-04 at 3.36.05 PM (2).jpeg";
import img3 from "./background/WhatsApp Image 2025-07-04 at 3.36.05 PM (3).jpeg";
import img4 from "./background/WhatsApp Image 2025-07-04 at 3.36.05 PM.jpeg";
import img5 from "./background/WhatsApp Image 2025-07-04 at 3.36.06 PM (1).jpeg";
import img6 from "./background/WhatsApp Image 2025-07-04 at 3.36.06 PM (2).jpeg";
import img7 from "./background/WhatsApp Image 2025-07-04 at 3.36.06 PM (3).jpeg";
import img8 from "./background/WhatsApp Image 2025-07-04 at 3.36.06 PM.jpeg";
import img9 from "./background/WhatsApp Image 2025-07-04 at 3.36.07 PM (1).jpeg";
import img10 from "./background/WhatsApp Image 2025-07-04 at 3.36.07 PM (2).jpeg";
import img11 from "./background/WhatsApp Image 2025-07-04 at 3.36.07 PM (3).jpeg";
import img12 from "./background/WhatsApp Image 2025-07-04 at 3.36.07 PM.jpeg";
import img13 from "./background/WhatsApp Image 2025-07-04 at 3.36.02 PM (1).jpeg";
import img14 from "./background/WhatsApp Image 2025-07-04 at 3.36.02 PM (2).jpeg";
import img15 from "./background/WhatsApp Image 2025-07-04 at 3.36.02 PM.jpeg";
import img16 from "./background/WhatsApp Image 2025-07-04 at 3.36.03 PM (1).jpeg";
import img17 from "./background/WhatsApp Image 2025-07-04 at 3.36.03 PM (2).jpeg";
import img18 from "./background/WhatsApp Image 2025-07-04 at 3.36.03 PM (3).jpeg";
import img19 from "./background/WhatsApp Image 2025-07-04 at 3.36.03 PM.jpeg";
import img20 from "./background/WhatsApp Image 2025-07-04 at 3.36.04 PM (1).jpeg";
import img21 from "./background/WhatsApp Image 2025-07-04 at 3.36.04 PM (2).jpeg";
import img22 from "./background/WhatsApp Image 2025-07-04 at 3.36.04 PM.jpeg";

const images = [
  { src: img1, caption: "Elegant Cane Chair" },
  { src: img2, caption: "Rattan Coffee Table" },
  { src: img3, caption: "Handcrafted Dining Set" },
  { src: img4, caption: "Natural Cane Sofa" },
  { src: img5, caption: "Outdoor Rattan Furniture" },
  { src: img6, caption: "Bedroom Cane Collection" },
  { src: img7, caption: "Traditional Cane Craftsmanship" },
  { src: img8, caption: "Modern Rattan Design" },
  { src: img9, caption: "Garden Cane Furniture" },
  { src: img10, caption: "Living Room Cane Set" },
  { src: img11, caption: "Office Cane Chair" },
  { src: img12, caption: "Cane Accessories" },
  { src: img13, caption: "Rattan Storage Solutions" },
  { src: img14, caption: "Cane Bed Frame" },
  { src: img15, caption: "Outdoor Cane Seating" },
  { src: img16, caption: "Dining Room Cane Set" },
  { src: img17, caption: "Cane Side Table" },
  { src: img18, caption: "Rattan Lounge Chair" },
  { src: img19, caption: "Cane Cabinet" },
  { src: img20, caption: "Garden Rattan Set" },
  { src: img21, caption: "Cane Rocking Chair" },
  { src: img22, caption: "Rattan Center Table" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-emerald-50 pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-emerald-600">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our collection of handcrafted cane and rattan furniture pieces, 
              each telling a story of tradition, craftsmanship, and natural beauty.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((item, idx) => (
              <div
                key={idx}
                className="break-inside-avoid group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openModal(item)}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-slate-100">
                  {/* Image container with dynamic height */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        aspectRatio: `${1 + (idx % 3) * 0.3}`,
                        minHeight: '200px',
                        maxHeight: '400px'
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-slate-800 font-medium text-sm">{item.caption}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover effects */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                    hoveredIndex === idx ? 'border-emerald-500/50 shadow-inner' : 'border-transparent'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg"
            >
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg"
            >
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg"
            >
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal image */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-rose-50">
                <h3 className="text-slate-800 text-xl font-medium text-center">
                  {selectedImage.caption}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;