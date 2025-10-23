"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 2px 10px rgba(0,0,0,0.1)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md transition-all duration-500"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.webp"
            alt="TuffSteel Logo"
            className={`transition-all duration-500 ${
              scrolled ? "h-8" : "h-10"
            } w-auto`}
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex gap-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </span>

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-600 transition-all duration-300 ease-out 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Menu (mobile) */}
        <div
          className="md:hidden flex flex-col gap-[6px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] rounded-full transition-all ${
              scrolled ? "bg-gray-800" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] rounded-full transition-all ${
              scrolled ? "bg-gray-800" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] rounded-full transition-all ${
              scrolled ? "bg-gray-800" : "bg-white"
            }`}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              scrolled ? "bg-white text-gray-800" : "bg-white/90 text-gray-800"
            } shadow-inner`}
          >
            <div className="flex flex-col items-center py-4 space-y-4 font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative ${
                      isActive ? "text-red-600 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

