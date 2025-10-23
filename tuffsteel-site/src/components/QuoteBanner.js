"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24 md:py-32 text-white"
      style={{
        backgroundImage:
          "url('/images/steel.webp')", // 🔹 replace with your image path
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Text Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Building the Future with Strength You Can Trust
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-10 text-gray-200"
        >
          Get a customized quote for your next big project today.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/quote"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full relative overflow-hidden group transition-all"
        >
          <span className="relative z-10">Request a Quote</span>
          {/* Sliding underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white group-hover:w-full transition-all duration-300"></span>
        </motion.a>
      </div>
    </section>
  );
}
