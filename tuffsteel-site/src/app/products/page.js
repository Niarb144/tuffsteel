"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function ProductsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section with Parallax */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/img2.webp')" }}
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Quality Steel Solutions
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
