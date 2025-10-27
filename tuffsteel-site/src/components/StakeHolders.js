"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stakeholders = [
  { id: 1, name: "Mombasa Cement", logo: "/images/mombasacement.webp",link:"https://www.mombasacement.com/" },
  { id: 2, name: "Nyumba", logo: "/images/nyumba.webp", link:"https://www.nyumba.com/" },
  { id: 3, name: "Tuff Bitumen", logo: "/images/logo.webp", link:"" },
  { id: 4, name: "Sika", logo: "/images/sika.webp", link:"" },
  { id: 5, name: "Nyumba ColourCoat", logo: "/images/nyumba.webp", link:"" },
  { id: 6, name: "Nyumba TMT Bars", logo: "/images/logo.webp", link:"" },
];

// Duplicating array to create a seamless infinite loop
const duplicatedLogos = [...stakeholders, ...stakeholders];

export default function StakeholderSection() {
  return (
    <section className="w-full py-20 bg-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-12"
        >
          Our Stakeholders
        </motion.h2>
      </div>

      {/* Scrolling Logo Row */}
      <motion.div
        className="flex gap-1 md:gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {duplicatedLogos.map((stakeholder) => (
          <motion.div
            key={stakeholder.id + Math.random()} // prevent key conflicts
            whileHover={{
              scale: 1.1,
              filter: "drop-shadow(0 0 10px rgba(30,58,138,0.6))",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center min-w-[160px]"
          >
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <a href={stakeholder.link || "#"} target="_blank">    
              <Image
                src={stakeholder.logo}
                alt={stakeholder.name}
                fill
                className="object-contain p-3"
              />
              </a>
            </div>
            <a href={stakeholder.link} className="text-gray-700 mt-4 font-medium text-sm md:text-base">
              {stakeholder.name}
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlays to fade edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
    </section>
  );
}
