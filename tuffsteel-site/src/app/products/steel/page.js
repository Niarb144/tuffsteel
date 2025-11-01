"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Products from "@/components/Products";
import ProductsSection from "@/components/ProductsSection";

const products = [
  {
    id: 1,
    name: "Nyumba TMT",
    image: "/images/nyumba_tmt.webp",
    description: "We manufacture and supply high grade bitumen for use in road construction",
  },
  {
    id: 2,
    name: "Steel Bars",
    image: "/images/steel.webp",
    description: "We manufacture and supply superior quality bituminous roofing felt for water proofing and other applications.",
  },
  {
    id: 3,
    name: "Beams/ Purlins /Angles",
    image: "/images/beam.webp",
    description: "Our bitumen emulsion is ideal for road maintenance and surface dressing applications.",
  },
  {    
    id: 4,
    name: "Pipes",
    image: "/images/pipes.webp",
    description: "We supply bitumen penetration grade for various construction and waterproofing needs.",
  },
  {
    id: 5,
    name: "Steel Plates",
    image: "/images/steel_plates.webp",
    description: "Our modified bitumen products offer enhanced performance for roofing and waterproofing applications.",
  }
];

export default function Steel() {
    const [activeProduct, setActiveProduct] = useState(null);

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
          Steel Products
        </motion.h1>
      </section>

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
      
      
    </main>
  );
}
