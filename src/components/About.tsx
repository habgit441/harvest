import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Church, Users, Heart, Star } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const features = [
    {
      icon: Church,
      title: 'Sacred Worship',
      description: 'Experience divine worship in the traditional Celestial Church style with powerful prayers and spiritual songs.'
    },
    {
      icon: Users,
      title: 'Community Unity',
      description: 'Join our vibrant community as we celebrate together in fellowship and brotherhood.'
    },
    {
      icon: Heart,
      title: 'Harvest Thanksgiving',
      description: 'A special time to give thanks for God\'s abundant blessings and provision throughout the year.'
    },
    {
      icon: Star,
      title: 'Spiritual Growth',
      description: 'Strengthen your faith and witness testimonies of God\'s goodness in our lives.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Our Harvest Festival
          </h2>
          <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
            The Isheri Cathedral Harvest Festival is a sacred celebration of God's abundant 
            blessings and provision. As a parish of the Celestial Church of Christ, we invite 
            you to join us in this joyous occasion of thanksgiving, worship, and community fellowship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-blue-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Join Us in Celebration</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Come and be part of this blessed occasion as we gather in praise and thanksgiving. 
            Experience the power of collective worship and the joy of Christian fellowship.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;