import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const program = [
    {
      day: "SUNDAY",
      date: "2ND NOVEMBER, 2025",
      event: "PROPHETIC MINISTRATION DAY",
      time: "10:00am",
      minister: "Shepherd in Charge",
    },
    {
      day: "MONDAY",
      date: "3RD NOVEMBER, 2025",
      event: "REVIVAL / SIDESMEN & SIDESWOMEN VIGIL",
      time: "5:00pm / 10:00pm",
      minister: "Prophet Femi Ayimora (CCC True Anointing Parish, Oke Odo, Lagos State)",
    },
    {
      day: "TUESDAY",
      date: "4TH NOVEMBER, 2025",
      event: "REVIVAL / YOUTH NIGHT",
      time: "5:00pm / 10:00pm",
      minister: "Prophet Jonathan Emmanuel Opashi (CCC Ephzibah Parish, Matogun, Ogun State)",
    },
    {
      day: "WEDNESDAY",
      date: "5TH NOVEMBER, 2025",
      event: "SERVICE FOR THE NEEDY / WOMEN DAY TAGGED: “WOMEN WHO EMBODY GOODNESS AND MERCY” / REVIVAL",
      time: "9:00am / 12:00pm / 5:00pm",
      minister: "V/S/E. Ebenezer Afolabi (CCC Iyana Oluwa Ifako 3, Ifako/Ijaye, Lagos State)",
    },
    {
      day: "THURSDAY",
      date: "6TH NOVEMBER, 2025",
      event: "Prophets/Prophetess Day / New Moon Service",
      time: "10:00am / 10:00pm",
      minister: "—",
    },
    {
      day: "FRIDAY",
      date: "7TH NOVEMBER, 2025",
      event: "NIGHT OF GOODNESS AND MERCY (Host Choir Concert)",
      time: "10:00pm",
      minister: "—",
    },
    {
      day: "SATURDAY",
      date: "8TH NOVEMBER, 2025",
      event: "Medical Outreach / Environmental",
      time: "—",
      minister: "—",
    },
    {
      day: "SUNDAY",
      date: "9TH NOVEMBER, 2025",
      event: "HARVEST THANKSGIVING DAY",
      time: "10:00am",
      minister: "Rev. Emmanuel Mobiyina Oshoffa (Pastor & Spiritual Head CCC Worldwide)",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Programme of Events
          </h2>
          <p className="text-lg text-blue-700">
            Join us as we celebrate a week filled with revival, thanksgiving, outreach, and worship.
          </p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-xl rounded-xl border border-blue-100">
          <table className="min-w-full table-auto text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold">Day/Date</th>
                <th className="px-4 py-3 text-sm font-semibold">Events</th>
                <th className="px-4 py-3 text-sm font-semibold">Time</th>
                <th className="px-4 py-3 text-sm font-semibold">Ministers</th>
              </tr>
            </thead>
            <tbody>
              {program.map((item, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="border-b border-blue-100 hover:bg-blue-50"
                >
                  <td className="px-4 py-3 text-blue-900 font-semibold whitespace-nowrap">
                    {item.day}<br />
                    <span className="text-sm text-blue-600">{item.date}</span>
                  </td>
                  <td className="px-4 py-3 text-blue-800">{item.event}</td>
                  <td className="px-4 py-3 text-blue-700 font-medium">{item.time}</td>
                  <td className="px-4 py-3 text-blue-700">{item.minister}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Services;
