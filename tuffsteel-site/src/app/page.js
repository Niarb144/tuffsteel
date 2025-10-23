"use client";

import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Products from "../components/Products";
import ProductsSection from "../components/ProductsSection";
import StakeHolders from "../components/StakeHolders";
import BlogSection from "../components/BlogSection";
import MissionVisionSection from "../components/MissionVisionSection";
import QuoteBanner from "../components/QuoteBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products />
      <StakeHolders />
      <MissionVisionSection />
      <QuoteBanner />
      <BlogSection />
      {/* <ProductsSection /> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-white overflow-x-hidden"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
        <p className="text-gray-700">
          TuffSteel provides a wide range of high-quality steel products built to last.
        </p>
      </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-8 bg-gray-100 overflow-x-hidden"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          We aim to be the trusted name in East Africa for steel and construction materials.
        </p>
      </motion.section> */}
    </>
  );
}
