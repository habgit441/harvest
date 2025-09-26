import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Donations", href: "#donations" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img src="/Images/Logo.png" alt="Isheri Cathedral logo" className="h-10 w-10 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold">Isheri Cathedral</h3>
                  <p className="text-blue-300 text-sm">Celestial Church of Christ</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-md text-sm">
                We are a vibrant parish of the Celestial Church of Christ,
                dedicated to worshipping God in spirit and truth, fostering
                fellowship, and spreading the gospel of Jesus Christ.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-blue-300" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5" />
                <span>Isheri, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-300" />
                <span>+234 806 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <span>info@isherichurch.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="bg-blue-700 p-2 rounded-full text-blue-200 hover:bg-blue-600 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-blue-700 text-center text-sm text-blue-200">
          <p>
            © {currentYear} Isheri Cathedral, Celestial Church of Christ. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
