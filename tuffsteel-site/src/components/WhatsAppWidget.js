"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "254714800800"; // Replace with your WhatsApp number (no + sign)

export default function WhatsAppWidget() {
  const [bannerClosed, setBannerClosed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [heroHeight, setHeroHeight] = useState(600);

  useEffect(() => {
    setIsTouch(("ontouchstart" in window) || navigator.maxTouchPoints > 0);

    // restore banner preference
    try {
      const saved = localStorage.getItem("tuffsteel_wa_banner_closed");
      if (saved === "1") setBannerClosed(true);
    } catch (e) {}

    // measure hero height dynamically
    const hero = document.querySelector(".hero-section");
    if (hero) setHeroHeight(hero.offsetHeight);

    const handleScroll = () => {
      const y = window.scrollY;
      setShowButton(y > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      const hero = document.querySelector(".hero-section");
      if (hero) setHeroHeight(hero.offsetHeight);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, [heroHeight]);

  const closeBannerPermanently = () => {
    setBannerClosed(true);
    try {
      localStorage.setItem("tuffsteel_wa_banner_closed", "1");
    } catch (e) {}
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${PHONE}`;
    window.open(url, "_blank");
  };

  const showBanner = !bannerClosed && hovered;

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          key="wa-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-20 right-6 z-50 flex items-end justify-end"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Banner */}
          <AnimatePresence>
            {showBanner && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="mr-3 flex items-center gap-3 bg-white/95 text-gray-900 rounded-lg shadow-lg p-3 pr-4 max-w-xs"
              >
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <FaWhatsapp className="text-2xl" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">Chat with us on WhatsApp</p>
                  <p className="text-xs text-gray-600 truncate">Ask about products, quotes, or delivery</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Message
                  </button>
                  <button
                    onClick={closeBannerPermanently}
                    aria-label="Close banner"
                    className="text-gray-500 hover:text-gray-700 p-1 rounded"
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating WhatsApp Button */}
          <div
            onClick={() => {
              if (isTouch && !bannerClosed) setHovered((s) => !s);
              else openWhatsApp();
            }}
            className="w-14 h-14 rounded-full bg-green-600 shadow-xl flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
