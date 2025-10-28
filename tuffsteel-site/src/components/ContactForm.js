"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function ContactSection() {

  const { company, contacts, social, mapEmbedUrl } = siteConfig;

  return (
    <section className="py-0 bg-gray-50">
      {/* Hero Section with Parallax */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/img8.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold text-center z-10"
        >
          Contact Us
        </motion.h1>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Have questions, need a quote, or want to collaborate?  
          Reach out — our team will get back to you as soon as possible.
        </motion.p>

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

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+254 712 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@tuffsteel.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    TuffSteel Ltd, Industrial Area, Nairobi, Kenya
                    <br />
                    {company.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-64">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tuffsteel%20Limited,%20Imaara%20Daima,%20Nairobi%20,%20Kenya+(Tuffsteel%20Limited)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
