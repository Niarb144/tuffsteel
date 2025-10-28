"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import siteConfig from "../config/siteConfig"; // ✅ import config

export default function Footer() {
  const [mapOpen, setMapOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const { company, contacts, social, mapEmbedUrl } = siteConfig;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 w-full h-48 md:h-56 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setMapOpen(true)}
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tuffsteel%20Limited,%20Imaara%20Daima,%20Nairobi%20,%20Kenya+(Tuffsteel%20Limited)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </motion.div>

        {/* Address & Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contact & Hours</h3>
          <p className="text-sm leading-relaxed">
            <strong>Address:</strong>
            <br />
            {company.name}
            <br />
            {company.location}
            <br />
            {company.address}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            <strong>Business Hours:</strong>
            <br />
            {company.businessHours.map((item, i) => (
              <span key={i}>
                {item.day}: {item.hours}
                <br />
              </span>
            ))}
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Products", href: "/products" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contacts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            {contacts.phone.map((num, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaPhoneAlt className="text-blue-500" />
                <a href={`tel:${num.replace(/\s+/g, "")}`}>{num}</a>
              </li>
            ))}
            {contacts.email.map((mail, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="text-blue-500" />
                <a href={`mailto:${mail}`}>{mail}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm mb-4">
            Stay updated with our latest news, offers, and product updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-6 mt-10 flex flex-wrap justify-center md:justify-between items-center gap-6">
        <div className="flex gap-4">
          {Object.entries(social).map(([platform, url]) => {
            const Icon =
              platform === "facebook"
                ? FaFacebookF
                : platform === "twitter"
                ? FaTwitter
                : platform === "linkedin"
                ? FaLinkedinIn
                : FaInstagram;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <Icon className="text-white text-lg" />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {company.name}. All Rights Reserved.
        </p>
      </div>

      {/* MAP MODAL (unchanged) */}
      <AnimatePresence>
        {mapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={() => setMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[70vh] bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl z-10"
                onClick={() => setMapOpen(false)}
              >
                <FaTimes />
              </button>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
