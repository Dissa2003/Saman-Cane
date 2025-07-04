import React, { useState } from "react";
import { Leaf, Star, Heart, Award, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Categories", href: "#categories" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8 text-emerald-500" />
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
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100">
          {navLinks.map((link) => (
            link.name === "Gallery" ? (
              <Link
                key={link.name}
                to={link.href}
                className="block px-6 py-3 text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block px-6 py-3 text-slate-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
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
            <Leaf className="w-12 h-12 text-emerald-500" />
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
                <h3 className="text-2xl font-bold text-slate-800 mb-4">30+ Years</h3>
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
      icon: "🛋️"
    },
    {
      name: "Bedroom",
      description: "Peaceful and serene bedroom furniture",
      color: "from-emerald-100 to-emerald-200",
      icon: "🛏️"
    },
    {
      name: "Dining",
      description: "Perfect for family gatherings and meals",
      color: "from-amber-100 to-amber-200",
      icon: "🍽️"
    },
    {
      name: "Outdoor",
      description: "Weather-resistant pieces for your garden",
      color: "from-blue-100 to-blue-200",
      icon: "🌿"
    },
    {
      name: "Office",
      description: "Productive and comfortable workspaces",
      color: "from-purple-100 to-purple-200",
      icon: "💼"
    },
    {
      name: "Accessories",
      description: "Decorative pieces to complete your space",
      color: "from-pink-100 to-pink-200",
      icon: "✨"
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
                  Explore Collection
                  <span className="ml-2">→</span>
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <div className="bg-gradient-to-br from-emerald-50 to-rose-50 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Thank You!</h4>
                <p className="text-slate-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/80"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/80"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/80 resize-none"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your furniture needs..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
          
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
                      +1 (234) 567-890
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
                      info@samancane.com
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
                      123 Cane Lane<br />
                      Greenfield, Country
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
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
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
              <Leaf className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">Saman Cane</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Crafting beautiful, sustainable furniture for over 30 years. 
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
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">📷</span>
                </div>
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">🐦</span>
                </div>
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
                  <About />
                  <Categories />
                  <Contact />
                </>
              }
            />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;