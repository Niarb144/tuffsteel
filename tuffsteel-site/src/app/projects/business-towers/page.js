"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function BusinessPage() {
  const projects = [
    {
      name: "Skyline Tower",
      image: "/images/img19.jpg",
      description:
        "A modern retail hub built to withstand high foot traffic while providing a luxurious shopping experience.",
    },
    {
      name: "Nairobi Trade Center",
      image: "/images/img23.jpg",
      description:
        "Features advanced steel frameworks and energy-efficient materials ensuring sustainability.",
    },
    {
      name: "Unity House",
      image: "/images/img24.jpg",
      description:
        "A mixed-use development combining retail, leisure, and office spaces in one integrated environment.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/img11.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold text-center z-10"
        >
          Business Towers
        </motion.h1>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Completed Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {proj.name}
                </h3>
                <p className="text-gray-600">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
