import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Donations', href: '#donations' },
    { name: 'Contact', href: '#contact' }
  ];

  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    // If the href is an in-page anchor, try to scroll; if not found (we're on another route) navigate to '/' then scroll
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        return;
      }

      // Element not found on this page - navigate to home and attempt to scroll after navigation
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 250);
      }
      setIsOpen(false);
      return;
    }

    // Non-anchor links: try to scroll to element or navigate if it's a route
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '/' && location.pathname !== '/') {
      navigate('/');
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    scrollToSection('#home');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo - uses public/Images/Logo.jpg */}
            <button
              onClick={handleLogoClick}
              aria-label="Go to home"
              className="flex items-center focus:outline-none"
            >
              <img
                src="/Images/Logo.png"
                alt="Harvest logo"
                className="h-8 w-auto sm:h-10 object-contain"
              />
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href === '/gallery' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-blue-900 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;