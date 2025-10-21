"use client";

import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-white overflow-x-hidden"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
        <p className="text-gray-700">
          TuffSteel provides a wide range of high-quality steel products built to last.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-gray-100 overflow-x-hidden"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          We aim to be the trusted name in East Africa for steel and construction materials.
        </p>
      </motion.section>
    </>
  );
}
