"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Steel Bars",
    description:
      "Durable and high-tensile steel bars perfect for construction projects requiring strength and longevity.",
    image: "/images/steel.webp",
    link: "/products/steel-bars",
  },
  {
    id: 2,
    name: "Roofing Sheets",
    description:
      "Premium quality roofing sheets designed for protection, durability, and aesthetic appeal.",
    image: "/images/roofing.webp",
    link: "/products/roofing-sheets",
  },
  {
    id: 3,
    name: "Steel Pipes",
    description:
      "High-grade steel pipes engineered for industrial and structural applications with corrosion resistance.",
    image: "/images/img4.webp",
    link: "/products/steel-pipes",
  },
  {
    id: 4,
    name: "Wire Mesh",
    description:
      "Versatile wire mesh for fencing, reinforcement, and construction, built to last and easy to install.",
    image: "/images/img6.webp",
    link: "/products/wire-mesh",
  },
];

export default function ProductSection() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section
      id="products"
      className="relative w-full py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => {
            const isActive = activeProduct === product.id;

            return (
              <motion.div
                key={product.id}
                layout
                transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
                className={`relative rounded-2xl shadow-md overflow-hidden border border-gray-100 bg-gray-50 hover:shadow-lg cursor-pointer ${
                  isActive ? "col-span-1 sm:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() =>
                  setActiveProduct(isActive ? null : product.id)
                }
              >
                {/* Image */}
                <motion.div layout className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Product name overlay */}
                  <motion.h3
                    layout
                    className="absolute bottom-4 left-4 text-white text-2xl font-semibold"
                  >
                    {product.name}
                  </motion.h3>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-6"
                    >
                      <p className="text-gray-700 mb-6">
                        {product.description}
                      </p>
                      <Link href={product.link}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-700 font-semibold relative group cursor-pointer"
                        >
                          View Product
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </motion.button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
