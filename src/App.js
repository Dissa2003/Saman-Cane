import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed w-full bg-cane shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <span className="font-heading text-2xl text-wood font-bold tracking-wide">
          Saman Cane Furniture
        </span>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-wood hover:text-leaf transition-colors font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-cane pt-24 pb-12"
    >
      <h1 className="font-heading text-4xl md:text-5xl text-wood font-bold mb-4 text-center">
        Saman Cane Furniture
      </h1>
      <p className="text-xl md:text-2xl text-leaf mb-6 text-center font-semibold">
        Crafting Timeless Cane and Rattan Furniture.
      </p>
      <p className="max-w-xl text-center text-wood/80">
        Welcome to Saman Cane Furniture, where tradition meets elegance. Discover our handcrafted cane and rattan pieces, designed to bring warmth and style to your home.
      </p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-sand">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-3xl text-wood mb-4">About Us</h2>
        <p className="mb-4 text-wood/90">
          Saman Cane Furniture has been a family-owned business for over 30 years, dedicated to the art of cane and rattan craftsmanship. Our mission is to create beautiful, sustainable furniture that stands the test of time.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-wood/90">
          <li>
            <span className="font-semibold text-leaf">Quality:</span> Each piece is meticulously handcrafted using the finest natural materials.
          </li>
          <li>
            <span className="font-semibold text-leaf">Tradition:</span> We honor traditional techniques passed down through generations.
          </li>
          <li>
            <span className="font-semibold text-leaf">Sustainability:</span> Our materials are sourced responsibly, ensuring minimal environmental impact.
          </li>
        </ul>
      </div>
    </section>
  );
}

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "Classic Cane Armchair",
  },
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
    caption: "Rattan Lounge Set",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    caption: "Handwoven Cane Sofa",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    caption: "Elegant Rattan Coffee Table",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    caption: "Cane Dining Chairs",
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    caption: "Rattan Accent Chair",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-cane">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl text-wood mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
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
}

function Contact() {
  return (
    <section id="contact" className="py-16 bg-sand">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-3xl text-wood mb-4">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="space-y-4 bg-cane p-6 rounded-lg shadow">
            <div>
              <label className="block text-wood font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-wood/30 rounded focus:outline-none focus:ring-2 focus:ring-leaf"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-wood font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-wood/30 rounded focus:outline-none focus:ring-2 focus:ring-leaf"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-wood font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-wood/30 rounded focus:outline-none focus:ring-2 focus:ring-leaf"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-leaf text-sand px-6 py-2 rounded font-semibold hover:bg-wood transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="block text-wood font-semibold">Phone:</span>
              <a href="tel:+1234567890" className="text-leaf hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="mb-4">
              <span className="block text-wood font-semibold">Email:</span>
              <a href="mailto:info@samancane.com" className="text-leaf hover:underline">
                info@samancane.com
              </a>
            </div>
            <div>
              <span className="block text-wood font-semibold">Address:</span>
              <span className="text-wood">
                123 Cane Lane, Greenfield, Country
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cane py-4 text-center text-wood/70 text-sm">
      &copy; {new Date().getFullYear()} Saman Cane Furniture. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 