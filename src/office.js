import React, { useState, useEffect } from "react";

const Office = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to dynamically import all images from the OFFICE folder
  const loadOfficeImages = async () => {
    try {
      // This will import all images from the OFFICE folder
      const imageContext = require.context('./background/OFFICE', false, /\.(png|jpe?g|svg|gif|webp)$/);
      const imageFiles = imageContext.keys();
      
      const officeImages = imageFiles.map((file, index) => {
        const imageModule = imageContext(file);
        // Extract filename without extension for display
        const fileName = file.replace('./', '').replace(/\.(png|jpe?g|svg|gif|webp)$/i, '');
        return {
          src: imageModule,
          caption: fileName,
          name: fileName,
          id: index
        };
      });
      
      setImages(officeImages);
    } catch (error) {
      console.log('No images found in OFFICE folder or folder is empty');
      setImages([]);
    }
  };

  useEffect(() => {
    loadOfficeImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    setSelectedImage(images[newIndex]);
  };

  const handleOrder = (image) => {
    // You can customize this function to handle ordering
    alert(`Order placed for: ${image.name}`);
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-rose-50 via-white to-emerald-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Office <span className="text-emerald-600">Collection</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              Productive and comfortable workspaces. 
              Office furniture designed for efficiency and style.
            </p>
            <div className="text-6xl mt-8">💼</div>
          </div>

          {/* Display Images */}
          {images.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">💼</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">No Office Images Yet</h3>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {images.map((item, idx) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
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
                        onClick={() => openModal(item)}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-slate-800 font-medium text-sm">{item.name}</p>
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

                    {/* Image Info and Order Button */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.name}</h3>
                      <p className="text-slate-600 text-sm mb-3">Office Furniture Collection</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrder(item);
                        }}
                        className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors duration-300 transform hover:scale-105"
                      >
                        Order Now
                      </button>
                    </div>

                    {/* Animated border */}
                    <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                      hoveredIndex === idx ? 'border-emerald-500/50 shadow-inner' : 'border-transparent'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
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

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{selectedImage.name}</h3>
                <p className="text-slate-600 mb-4">Office furniture collection</p>
                <button
                  onClick={() => handleOrder(selectedImage)}
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors duration-300"
                >
                  Order This Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Office;
