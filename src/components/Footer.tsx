import React from 'react';
import { motion } from 'framer-motion';
import { Church, Heart, Star, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Donations', href: '#donations' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Church className="h-10 w-10 text-blue-300" />
                <div>
                  <h3 className="text-2xl font-bold">Isheri Cathedral</h3>
                  <p className="text-blue-300">Celestial Church of Christ</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
                We are a vibrant parish of the Celestial Church of Christ, dedicated to 
                worshipping God in spirit and truth, fostering community fellowship, 
                and spreading the gospel of Jesus Christ.
              </p>
              <div className="flex items-center space-x-2 text-blue-300">
                <Heart className="w-4 h-4" />
                <span>Serving God with Love and Dedication</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-blue-300" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-200 hover:text-white transition-colors duration-200 hover:pl-2 transition-all"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-blue-300 mt-1" />
                  <div className="text-blue-200 text-sm">
                    <p>Isheri, Lagos State</p>
                    <p>Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 text-sm">+234 806 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 text-sm">info@isherichurch.org</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="text-lg font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="bg-blue-700 p-2 rounded-full text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Service Times */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-800/50 rounded-xl p-6 mb-8"
        >
          <h4 className="text-xl font-semibold mb-4 text-center">Service Times</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h5 className="font-medium text-blue-300">Sunday Service</h5>
              <p className="text-blue-200">8:00 AM - 12:00 PM</p>
            </div>
            <div>
              <h5 className="font-medium text-blue-300">Wednesday Service</h5>
              <p className="text-blue-200">6:00 PM - 8:00 PM</p>
            </div>
            <div>
              <h5 className="font-medium text-blue-300">Friday Service</h5>
              <p className="text-blue-200">6:00 PM - 8:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-blue-700 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200">
              © {currentYear} Isheri Cathedral, Celestial Church of Christ. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-blue-300 text-sm">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Site Map</span>
            </div>
          </div>
          <motion.div
            className="mt-4 flex items-center justify-center space-x-2 text-blue-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm">Made with love for God's glory</span>
            <Heart className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;