import React from "react";

type Minister = {
  name: string;
  title: string;
  role: string;
  image: string;
};

const ministers: Minister[] = [
  {
    name: "Rev. Emmanuel Mobiyina Oshoffa",
    title: "Pastor & Spiritual Head",
    role: "CCC Worldwide",
    image: "/images/oshofa.jpg",
  },
  {
    name: "Sp/Sup Evang. Ekundayo M. Olaifa JP MPIC",
    title: "Special Superior Evangelist",
    role: "Harvest Coordinator",
    image: "/images/olaifa.jpg",
  },
  {
    name: "M/C Temitope Adenekan (nee Toriola)",
    title: "Master of Ceremony",
    role: "Harvest Programme",
    image: "/images/adenekan.jpg",
  },
  {
    name: "Hon. Evang. Oladipupo Falola",
    title: "Honourable Evangelist",
    role: "Harvest Treasurer",
    image: "/images/falola.jpg",
  },
  {
    name: "Hon. Evang. Tosin Ogunba",
    title: "Honourable Evangelist",
    role: "Harvest Treasurer",
    image: "/images/ogunba.jpg",
  },
  {
    name: "Sp/Sup/Evang. Dapo Adebanjo",
    title: "Special Superior Evangelist",
    role: "Harvest Committee",
    image: "/images/adebanjo.jpg",
  },
  // ➕ Add more ministers as needed
];

const Ministers: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Harvest Ministers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ministers.map((minister, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl transition duration-300"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-500">
                <img
                  src={minister.image}
                  alt={minister.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {minister.name}
              </h3>
              <p className="text-blue-600 font-medium">{minister.title}</p>
              <p className="text-gray-500 text-sm">{minister.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministers;
