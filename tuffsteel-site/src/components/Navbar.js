"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaFilePdf } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clipOrigin, setClipOrigin] = useState({ x: "95%", y: "5%" });
  const pathname = usePathname();
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect hamburger position dynamically
  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
      setClipOrigin({ x: `${x}%`, y: `${y}%` });
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Get a Quote" },
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
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
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
          className={`hidden lg:flex gap-8 absolute left-1/2 -translate-x-1/2 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-blue-500" : "hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-600 transition-all duration-300 ease-out 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Right Section (Socials + CTA) */}
        <div className="hidden lg:flex items-center gap-5">
          <div
            className={`flex gap-3 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link href="https://facebook.com" target="_blank">
              <FaFilePdf className="hover:text-blue-600 transition-colors"/>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-pink-500 transition-colors" />
            </Link>
          </div>
          <Link
            href="/quote"
            className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Animated Hamburger Menu */}
        <div
          ref={buttonRef}
          className="lg:hidden relative w-6 h-5 flex flex-col justify-between cursor-pointer z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 8 : 0,
              backgroundColor: scrolled ? "#1f2937" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] rounded-full"
          />
          <motion.span
            animate={{
              opacity: menuOpen ? 0 : 1,
              backgroundColor: scrolled ? "#1f2937" : "#ffffff",
            }}
            transition={{ duration: 0.2 }}
            className="block w-full h-[2px] rounded-full"
          />
          <motion.span
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -8 : 0,
              backgroundColor: scrolled ? "#1f2937" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] rounded-full"
          />
        </div>
      </div>

      {/* Dynamic Radial Expanding Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{
              clipPath: `circle(0% at ${clipOrigin.x} ${clipOrigin.y})`,
            }}
            animate={{
              clipPath: `circle(150% at ${clipOrigin.x} ${clipOrigin.y})`,
            }}
            exit={{
              clipPath: `circle(0% at ${clipOrigin.x} ${clipOrigin.y})`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className={`fixed top-0 left-0 w-full h-screen ${
              scrolled ? "bg-white text-gray-800" : "bg-white/95 text-gray-900"
            } flex flex-col items-center justify-center space-y-8 text-lg font-medium lg:hidden z-[40]`}
            style={{ pointerEvents: "auto" }}
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
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
                </motion.div>
              );
            })}

            {/* Socials + CTA below links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + navLinks.length * 0.1 }}
            >
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="flex gap-5 text-xl">
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebook className="hover:text-blue-600 transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <FaTwitter className="hover:text-blue-400 transition-colors" />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <FaInstagram className="hover:text-pink-500 transition-colors" />
                </Link>
              </div>
              <Link
                href="/quote"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all"
              >
                Get a Quote
              </Link>
            </div>
            </motion.div>
          </motion.div>

          
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
