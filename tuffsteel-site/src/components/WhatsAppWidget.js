"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12c0 4.97-4.03 9-9 9a9 9 0 01-4-0.9L3 21l1.9-5.9A9 9 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
                    <path d="M8.2 10.8c.2.6.9 1.3 1.9 1.9.9.5 1.6.5 2 .4.4-.1 1-.3 1.4-.6.4-.3.7-.3 1-.2.2.1.9.4 1.1.5.2.1.4.3.2.6-.3.4-1 1.1-2.6 1.8-1.6.7-2.8.7-3.9.4-1.1-.3-2.6-1.2-3.7-2.3C6 12.6 5 11.2 4.8 10c-.2-1.2.4-2.2 1.2-2.6.4-.2.8-.3 1.1-.2.3.1.6.2.8.5.2.3.4.5.6.8.2.3.1.5-.1.8-.2.3-.4.6-.4.9z" />
                  </svg>
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
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12c0 4.97-4.03 9-9 9a9 9 0 01-4-0.9L3 21l1.9-5.9A9 9 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
              <path d="M8.2 10.8c.2.6.9 1.3 1.9 1.9.9.5 1.6.5 2 .4.4-.1 1-.3 1.4-.6.4-.3.7-.3 1-.2.2.1.9.4 1.1.5.2.1.4.3.2.6-.3.4-1 1.1-2.6 1.8-1.6.7-2.8.7-3.9.4-1.1-.3-2.6-1.2-3.7-2.3C6 12.6 5 11.2 4.8 10c-.2-1.2.4-2.2 1.2-2.6.4-.2.8-.3 1.1-.2.3.1.6.2.8.5.2.3.4.5.6.8.2.3.1.5-.1.8-.2.3-.4.6-.4.9z" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
