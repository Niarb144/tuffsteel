"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { label: "Years Active", value: 15 },
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 85 },
  { label: "User Reviews", value: 430 },
];

export default function AboutSection() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("about-section");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about-section"
      className="relative w-full py-20 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        
        {/* Left Side: Image & Title */}
        <div className="relative flex flex-col items-start md:w-1/2">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-30"></div>
            <Image
              src="/images/img4.webp"
              alt="TuffSteel Factory"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side: Text & Stats */}
        <div className="flex flex-col justify-center md:w-1/2">
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 mb-8 leading-relaxed"
          >
            At <span className="font-semibold text-blue-700">TuffSteel</span>, we are
            dedicated to delivering high-quality steel products and construction
            solutions across the region. With years of industry experience, we
            have built a reputation for strength, durability, and reliability —
            the same values that define our brand.
          </motion.p>

          {/* CTA Button with sliding underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <Link href="/about" className="group relative inline-block">
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="text-blue-700 font-semibold text-lg tracking-wide"
              >
                Learn More
              </motion.span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center md:items-start"
              >
                <span className="text-3xl md:text-4xl font-bold text-blue-900">
                  {hasScrolled ? <CountUp target={stat.value} /> : 0}+
                </span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Counter Animation */
function CountUp({ target }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}</>;
}
