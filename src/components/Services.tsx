import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, Users, Music, BookOpen, Utensils } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const schedule = [
    {
      time: '8:00 AM',
      title: 'Opening Prayer & Praise',
      description: 'Begin with powerful opening prayers and celestial songs',
      icon: Music
    },
    {
      time: '9:00 AM',
      title: 'Harvest Thanksgiving Service',
      description: 'Special thanksgiving service with testimonies',
      icon: BookOpen
    },
    {
      time: '11:00 AM',
      title: 'Harvest Presentation',
      description: 'Presentation of first fruits and harvest offerings',
      icon: Users
    },
    {
      time: '12:30 PM',
      title: 'Community Feast',
      description: 'Shared meal and fellowship with the congregation',
      icon: Utensils
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Festival Program
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Join us for a full day of worship, celebration, and fellowship. 
            Here's our planned schedule for the Harvest Festival.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {schedule.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-lg p-3 group-hover:bg-blue-700 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-semibold">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-blue-700">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Location & Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Isheri Cathedral Parish</p>
                    <p className="text-blue-700">Celestial Church of Christ</p>
                    <p className="text-blue-600">Isheri, Lagos State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Open to All</p>
                    <p className="text-blue-700">Everyone is welcome to join our celebration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900">Full Day Event</p>
                    <p className="text-blue-700">8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">What to Bring</h4>
              <ul className="space-y-2 text-blue-700">
                <li>• Your harvest offerings and first fruits</li>
                <li>• White garments (traditional Celestial attire)</li>
                <li>• Musical instruments (optional)</li>
                <li>• Items for the community feast</li>
                <li>• A heart ready for worship and thanksgiving</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;