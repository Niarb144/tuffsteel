"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const galleryImages = [
    "/images/img1.webp",
    "/images/img2.webp",
    "/images/img3.webp",
    "/images/img4.webp",
    "/images/img5.webp",
    "/images/img6.webp",
  ];

  return (
    <div className=""> {/* offset for fixed navbar */}
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/about.webp')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-2xl text-gray-200">
            Forging Strength, Building the Future Together
          </p>
        </motion.div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              At TUFFSTEEL® LIMITED, we are the go to distributor for all your construction materials
               needs. You are assured of purchasing highest quality building materials endorsed and certified
                by the Kenya Bureau of Standards.  
              <br /><br />
              In the last 12 years that the company has been in existence, TUFFSTEEL® LIMITED has become synonymous
               with endurance, reliability and quality and is one of the leading suppliers of cement, steel, roofing
                solutions, Bitumen and industrial chemicals for construction use, in Kenya.
              <br /><br />
              TUFFSTEEL® LIMITED is committed to enhancing Kenya’s infrastructure by providing superior construction
               materials under one roof through our long standing partnerships with some of Kenya’s leading and expert
                manufacturers in the cement, steel, roofing solutions industries and other international companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 text-center">
            {[
              { title: "Our Mission", text: "To consistently provide the construction and engineering industry with reliable, superior quality products and services." },
              { title: "Our Vision", text: "Through our dynamic and reliable infrastructure we offer our service throughout Kenya and all across Africa and aspire to be the most trusted and preferred partner in the provision of wholesale construction materials - all from under one roof." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-12"
          >
            Our Gallery
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-md group"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white text-lg font-semibold">
                  Our Work
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
