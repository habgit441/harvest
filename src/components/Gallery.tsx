import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Video, Users, Church, Heart, Star } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'worship', name: 'Worship', icon: Church },
    { id: 'community', name: 'Community', icon: Users },
    { id: 'celebration', name: 'Celebration', icon: Heart },
    { id: 'videos', name: 'Videos', icon: Video }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'worship',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468096/pexels-photo-8468096.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sunday Worship Service',
      description: 'Our congregation in prayer and worship'
    },
    {
      id: 9,
      category: 'community',
      type: 'image',
      src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=900',
      title: 'Community Outreach',
      description: 'Volunteers serving together'
    },
    {
      id: 2,
      category: 'community',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468075/pexels-photo-8468075.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Fellowship',
      description: 'Members sharing in fellowship'
    },
    {
      id: 3,
      category: 'celebration',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468093/pexels-photo-8468093.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Harvest Celebration',
      description: 'Previous harvest festival moments'
    },
    {
      id: 4,
      category: 'worship',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468077/pexels-photo-8468077.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Prayer Session',
      description: 'Powerful prayer moments'
    },
    {
      id: 5,
      category: 'community',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468095/pexels-photo-8468095.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Youth Fellowship',
      description: 'Young members in fellowship'
    },
    {
      id: 6,
      category: 'celebration',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468089/pexels-photo-8468089.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Thanksgiving Service',
      description: 'Thanksgiving and praise'
    },
    {
      id: 7,
      category: 'videos',
      type: 'video',
      src: 'https://player.vimeo.com/external/449996825.sd.mp4?s=8bdfc3e86b8d37cfc1f8be59f4a46f48d2e188e7&profile_id=164&oauth2_token_id=57447761',
      title: 'Worship Highlights',
      description: 'Video highlights from our services'
    },
    {
      id: 8,
      category: 'worship',
      type: 'image',
      src: 'https://images.pexels.com/photos/8468098/pexels-photo-8468098.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Choir Performance',
      description: 'Our celestial choir in action'
    }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading intentionally removed - only images will be displayed */}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Clean Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full h-56 overflow-hidden">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                  />
                )}

                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Only image/video shown; titles and overlays removed */}
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-blue-700 text-lg">
              No items found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
