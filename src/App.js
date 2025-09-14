import React, { useState } from "react";
import { Leaf, Star, Heart, Award, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Gallery from "./Gallery";
import GalleryPreview from "./GalleryPreview";
import ContactForm from "./ContactForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Dining from "./Dining";
import Outdoor from "./outdoor";
import Office from "./office";
import Accessories from "./Accessories";
import AdminPanel from "./admin/AdminPanel";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Categories", href: "#categories" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Debug: Log that navbar is rendering
  console.log('Navbar is rendering on:', window.location.pathname);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50 border-b border-rose-100" style={{top: 0, left: 0}}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <img src={require('./background/logo/20250705_0240_Saman Cane Logo_simple_compose_01jzbmc0yye4g8meksj4hj9vwt.png')} alt="Saman Cane Logo" className="w-16 h-16 object-contain" />
          <span className="text-2xl font-bold text-slate-800 tracking-tight">
            Saman Cane
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.name === "Gallery" ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
                onClick={() => console.log('Navigating to Gallery')}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
                onClick={() => console.log('Navigating to', link.name)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
                onClick={() => console.log('Navigating to', link.name)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          ))}
        </div>
        
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-rose-100">
          {navLinks.map((link) => (
            link.name === "Gallery" ? (
              <Link
                key={link.name}
                to={link.href}
                className="block px-6 py-3 text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => {
                  console.log('Mobile: Navigating to Gallery');
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ) : link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => {
                  console.log('Mobile: Navigating to', link.name);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block px-6 py-3 text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => {
                  console.log('Mobile: Navigating to', link.name);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-rose-50 via-white to-emerald-50 pt-24 pb-12 relative overflow-hidden">
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width=\"60\"%20height=\"60\"%20viewBox=\"0%200%2060%2060\"%20xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg%20fill=\"none\"%20fill-rule=\"evenodd\"%3E%3Cg%20fill=\"%23f1f5f9\"%20fill-opacity=\"0.3\"%3E%3Ccircle%20cx=\"30\"%20cy=\"30\"%20r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-rose-200">
            <img src={require('./background/logo/20250705_0240_Saman Cane Logo_simple_compose_01jzbmc0yye4g8meksj4hj9vwt.png')} alt="Saman Cane Logo" className="w-40 h-40 object-contain" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Saman Cane
          <span className="block text-emerald-600 text-4xl md:text-5xl lg:text-6xl mt-2">
            Furniture
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light leading-relaxed">
          Crafting Timeless Cane & Rattan Furniture with 
          <span className="text-emerald-600 font-semibold"> Passion & Precision</span>
        </p>
        <p className="max-w-2xl mx-auto text-slate-500 mb-10 text-lg leading-relaxed">
          Welcome to Saman Cane Furniture, where tradition meets contemporary elegance. 
          Discover our handcrafted cane and rattan pieces, designed to bring warmth, 
          style, and natural beauty to your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover Our Story
          </a>
          <a
            href="#contact"
            className="bg-white text-emerald-600 border-2 border-emerald-500 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: "Premium Quality",
      description: "Each piece is meticulously handcrafted using the finest natural materials sourced from sustainable forests."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Heritage Tradition",
      description: "We honor traditional techniques passed down through generations, preserving the art of cane craftsmanship."
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      title: "Eco-Friendly",
      description: "Our materials are responsibly sourced, ensuring minimal environmental impact and maximum sustainability."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Our <span className="text-emerald-600">Craft</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For over three decades, Saman Cane Furniture has been a family-owned business 
            dedicated to the art of cane and rattan craftsmanship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-emerald-100 to-rose-100 rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">25+ Years</h3>
                <p className="text-slate-600">of Excellence in Furniture Craftsmanship</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Our mission is to create beautiful, sustainable furniture that stands the test of time. 
              Every piece tells a story of skilled artisans who pour their heart and soul into their work.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              From our workshop to your home, we ensure that each creation embodies the perfect 
              balance of functionality, beauty, and environmental responsibility.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const categories = [
    {
      name: "Living Room",
      description: "Comfortable seating and elegant coffee tables",
      color: "from-rose-100 to-rose-200",
      icon: "🛋️",
      link: "/living-room"
    },
    {
      name: "Bedroom",
      description: "Peaceful and serene bedroom furniture",
      color: "from-emerald-100 to-emerald-200",
      icon: "🛏️",
      link: "/bedroom"
    },
    {
      name: "Dining",
      description: "Perfect for family gatherings and meals",
      color: "from-amber-100 to-amber-200",
      icon: "🍽️",
      link: "/dining"
    },
    {
      name: "Outdoor",
      description: "Weather-resistant pieces for your garden",
      color: "from-blue-100 to-blue-200",
      icon: "🌿",
      link: "/outdoor"
    },
    {
      name: "Office",
      description: "Productive and comfortable workspaces",
      color: "from-purple-100 to-purple-200",
      icon: "💼",
      link: "/office"
    },
    {
      name: "Accessories",
      description: "Decorative pieces to complete your space",
      color: "from-pink-100 to-pink-200",
      icon: "✨",
      link: "/accessories"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-emerald-600">Categories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of handcrafted furniture designed for every room and purpose.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/50`}>
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{category.name}</h3>
                <p className="text-slate-600 leading-relaxed">{category.description}</p>
                <div className="mt-4 inline-flex items-center text-emerald-600 font-medium">
                  <Link to={category.link} className="flex items-center hover:underline">
                    Explore Collection
                    <span className="ml-2">→</span>
                  </Link>
                </div>
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring beautiful cane furniture into your home? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      +94 71 340 1477
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <a href="mailto:info@samancane.com" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      canefurnituresaman@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Address</h4>
                    <p className="text-slate-600">
                      No 30/C Kandy road<br />
                      Radhawadunna, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Holidays</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={require('./background/logo/20250705_0240_Saman Cane Logo_simple_compose_01jzbmc0yye4g8meksj4hj9vwt.png')} alt="Saman Cane Logo" className="w-16 h-16 object-contain" />
              <span className="text-2xl font-bold">Saman Cane</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Crafting beautiful, sustainable furniture for over 25 years. 
              Bringing nature's elegance into your home.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-2">
              <p className="text-slate-300">Follow our journey and see our latest creations.</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.tiktok.com/@samancane?_t=ZS-8xlkDsgDAg9&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/samancanefurniture?igsh=M2NwNW4zMXB1dGxv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/share/1BeRLo1QRt/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Saman Cane Furniture. All rights reserved. 
            <span className="ml-2">Made with ❤️ for sustainable living.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <GalleryPreview />
                  <About />
                  <Categories />
                  <Contact />
                </>
              }
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/living-room" element={<LivingRoom />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/office" element={<Office />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;