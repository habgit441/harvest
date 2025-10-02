import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const CountdownTimer = () => {
  // Set harvest event date to Sunday, November 30, 2025 at 10:00 AM
  const harvestDate = new Date('2025-11-30T10:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = harvestDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-20 border border-blue-100"
      animate={{ 
        boxShadow: [
          "0px 0px 10px rgba(59,130,246,0.6)", 
          "0px 0px 20px rgba(59,130,246,0.9)", 
          "0px 0px 10px rgba(59,130,246,0.6)"
        ] 
      }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <Calendar className="text-blue-600 w-5 h-5" />
        <h3 className="text-blue-900 font-semibold text-lg">Harvest Festival Countdown</h3>
        <Clock className="text-blue-600 w-5 h-5" />
      </div>
      
      <p className="text-blue-700 text-sm mb-4">November 30, 2025 • 10:00 AM (Sunday)</p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-4 min-w-[80px] shadow-lg"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl md:text-3xl font-bold"
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-blue-100 text-sm font-medium">{unit.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
