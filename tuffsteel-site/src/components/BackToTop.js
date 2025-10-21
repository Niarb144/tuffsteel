"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // Show button after scrolling down 300px
      setVisible(scrollY > 300);

      // Detect if near bottom (within 20% of total page height)
      setAtBottom(scrollY + windowHeight >= docHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-500 focus:outline-none cursor-pointer ${
            atBottom
              ? "bg-gray-700 hover:bg-gray-800 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
