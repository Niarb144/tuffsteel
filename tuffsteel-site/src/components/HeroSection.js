"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Forging Strength, Building the Future",
    subtitle:
      "Discover premium steel products crafted for durability and performance.",
    image: "/images/img1.webp",
    link: "/products",
  },
  {
    id: 2,
    title: "Innovative Solutions in Steel Manufacturing",
    subtitle: "We combine technology and experience to deliver excellence.",
    image: "/images/img2.webp",
    link: "/about",
  },
  {
    id: 3,
    title: "Your Trusted Partner in Construction Materials",
    subtitle: "Providing the highest quality steel and service since inception.",
    image: "/images/img3.webp",
    link: "/products",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const next = () => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    };
    timeoutRef.current = setTimeout(next, 7000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Parallax background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    if (swipe > 100) handlePrev();
    else if (swipe < -100) handleNext();
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="hero-section relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-[5]" />

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 80, damping: 25 },
            opacity: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                y,
              backgroundImage: `url(${slides[current].image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-8 md:px-24">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200"
        >
          {slides[current].subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href={slides[current].link}
            className="bg-red-600 hover:bg-blue-500 px-6 py-3 rounded-full text-white font-semibold "
          >
            Explore Now
          </Link>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-40 md:bottom-20 left-10 md:left-24 flex items-center gap-3 z-20">
        <button
          onClick={handlePrev}
          className="p-3 bg-blue-500 hover:bg-blue-100 rounded-full backdrop-blur-md transition cursor-pointer"
        >
          <ArrowLeft className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-blue-500 hover:bg-blue-100 rounded-full backdrop-blur-md transition cursor-pointer"
        >
          <ArrowRight className="text-white" />
        </button>
      </div>

      {/* Next Slide Preview */}
      <div className="absolute bottom-40 right-10 md:bottom-20 md:right-20 z-20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={handleNext}
          className="cursor-pointer rounded overflow-hidden w-30 h-30 border-1 border-white/40 shadow-lg"
        >
          <img
            src={slides[(current + 1) % slides.length].image}
            alt="Next slide preview"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-red-600 w-6" : "bg-white/60 hover:bg-white"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
