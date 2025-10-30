"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Products from "@/components/Products";
import ProductsSection from "@/components/ProductsSection";

const products = [
  {
    name: "Steel Bars",
    image: "/images/img1.webp",
    description: "High-tensile steel bars designed for strength and durability in all construction projects.",
  },
  {
    name: "Roofing Sheets",
    image: "/images/img2.webp",
    description: "Premium-quality galvanized roofing sheets offering long-lasting protection.",
  },
  {
    name: "Structural Steel",
    image: "/images/structural-steel.jpg",
    description: "Precision-engineered structural steel suitable for commercial and industrial builds.",
  },
  {
    name: "Reinforcement Mesh",
    image: "/images/steel-mesh.jpg",
    description: "Durable steel mesh designed for concrete reinforcement and superior bonding.",
  },
];

export default function WireProducts() {
  return (
    <main className="pt-0">
      {/* Hero Section with Parallax */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/img4.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold text-center z-10"
        >
          Our Products
        </motion.h1>
      </section>

      {/* Product Grid */}
      <ProductsSection />
    </main>
  );
}
