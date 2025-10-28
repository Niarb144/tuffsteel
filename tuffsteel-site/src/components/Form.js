"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function ContactSection() {

  const { company, contacts, social, mapEmbedUrl } = siteConfig;

  return (
    <section className="py-0 bg-gray-50">
     
     

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", cursor: "pointer" }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>          
        </div>
      </div>
    </section>
  );
}
