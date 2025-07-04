import React from "react";

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
  { src: img1, caption: "3.36.05 PM (1)" },
  { src: img2, caption: "3.36.05 PM (2)" },
  { src: img3, caption: "3.36.05 PM (3)" },
  { src: img4, caption: "3.36.05 PM" },
  { src: img5, caption: "3.36.06 PM (1)" },
  { src: img6, caption: "3.36.06 PM (2)" },
  { src: img7, caption: "3.36.06 PM (3)" },
  { src: img8, caption: "3.36.06 PM" },
  { src: img9, caption: "3.36.07 PM (1)" },
  { src: img10, caption: "3.36.07 PM (2)" },
  { src: img11, caption: "3.36.07 PM (3)" },
  { src: img12, caption: "3.36.07 PM" },
  { src: img13, caption: "3.36.02 PM (1)" },
  { src: img14, caption: "3.36.02 PM (2)" },
  { src: img15, caption: "3.36.02 PM" },
  { src: img16, caption: "3.36.03 PM (1)" },
  { src: img17, caption: "3.36.03 PM (2)" },
  { src: img18, caption: "3.36.03 PM (3)" },
  { src: img19, caption: "3.36.03 PM" },
  { src: img20, caption: "3.36.04 PM (1)" },
  { src: img21, caption: "3.36.04 PM (2)" },
  { src: img22, caption: "3.36.04 PM" },
];

const Gallery = () => (
  <section className="py-16 bg-cane">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-heading text-3xl text-wood mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="bg-sand rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3">
              <p className="text-wood text-center font-medium">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery; 