"use client";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-white" id="mission-vision">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-transparent hover:border-blue-600"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-gray-900">Tuffsteel</span>,
              our mission is to strengthen the foundation of progress by delivering
              high-quality steel products and solutions that empower industries,
              communities, and infrastructure projects across Africa.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-transparent hover:border-blue-600"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted steel solutions provider, setting
              the benchmark for innovation, sustainability, and excellence while
              contributing to the continent’s growth and transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
