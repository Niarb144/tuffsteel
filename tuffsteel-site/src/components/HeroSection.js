"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="h-screen mt-0 bg-fixed bg-center bg-cover flex items-center justify-center overflow-x-hidden"
      style={{ backgroundImage: "url('/images/img2.webp')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="bg-black/60 p-10 rounded-2xl text-center text-white max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4">Forging Strength. Building the Future.</h1>
        <p className="text-lg">TuffSteel Industries | Quality you can rely on</p>
      </motion.div>
    </section>
  );
}
