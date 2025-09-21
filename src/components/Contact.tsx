import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Isheri Cathedral Parish', 'Celestial Church of Christ', 'Isheri, Lagos State, Nigeria']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 806 123 4567', '+234 813 987 6543']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@isherichurch.org', 'harvest@isherichurch.org']
    },
    {
      icon: Clock,
      title: 'Service Times',
      details: ['Sundays: 8:00 AM - 12:00 PM', 'Wednesdays: 6:00 PM - 8:00 PM', 'Fridays: 6:00 PM - 8:00 PM']
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any questions 
            about our services or the upcoming harvest festival.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-blue-700">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-900 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-blue-900 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-900 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-900 font-medium mb-2">Subject</label>
                  <select className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300">
                    <option value="">Select a subject</option>
                    <option value="harvest">Harvest Festival Inquiry</option>
                    <option value="service">Service Information</option>
                    <option value="donation">Donation Question</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-blue-900 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-blue-100 rounded-2xl p-8 text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Visit Us</h3>
            <p className="text-blue-700 mb-4">
              Join us at our beautiful cathedral in Isheri for worship, fellowship, and spiritual growth.
            </p>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;