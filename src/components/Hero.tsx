import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Typing effect state
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "45th Adult Harvest – Thanksgiving Service";

  // Verse rotation
  const verses = [
    "Psalm 23:6 – Surely goodness and mercy shall follow me all the days of my life",
    "Psalm 100:4 – Enter his gates with thanksgiving and his courts with praise",
    "James 1:17 – Every good and perfect gift is from above",
    "Psalm 118:24 – This is the day the Lord has made; let us rejoice and be glad in it"
  ];
  const [verseIndex, setVerseIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80); // typing speed
    return () => clearInterval(interval);
  }, []);

  // Verse rotation logic
  useEffect(() => {
    const verseTimer = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % verses.length);
    }, 5000); // change every 5s
    return () => clearInterval(verseTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden"
    >
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0.5 + Math.random(),
              opacity: 0.4,
            }}
            animate={{
              y: [
                Math.random() * 300,
                Math.random() * -300,
                Math.random() * 300,
              ],
              x: [
                Math.random() * 150,
                Math.random() * -150,
                Math.random() * 150,
              ],
              opacity: [0.3, 0.6, 0.4],
              scale: [0.8, 1.3, 0.9],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Harvest Badge with typing effect */}
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white font-extrabold text-lg md:text-xl rounded-full px-6 py-3 shadow-xl border-4 border-white mb-6 whitespace-nowrap overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {displayedText}
            <span className="animate-pulse">|</span> {/* cursor effect */}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Harvest of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Goodness
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-500 text-transparent bg-clip-text">
              Mercy
            </span>
          </motion.h1>

          {/* Bible Verse Rotating */}
          <motion.p
            key={verseIndex} // re-triggers animation when verse changes
            className="text-lg md:text-xl text-blue-700 mb-6 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {verses[verseIndex]}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
