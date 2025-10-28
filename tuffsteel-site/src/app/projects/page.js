"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function Projects() {
  const projectCategories = [
    {
      title: "Malls",
      description:
        "Modern commercial spaces built with durability, safety, and customer convenience in mind.",
      image: "/images/img10.webp",
      href: "/projects/malls",
      projects: ["Westgate Mall", "Imaara Mall", "Riverbank Complex"],
    },
    {
      title: "Hospitals",
      description:
        "Healthcare facilities constructed with precision to meet strict standards and ensure reliability.",
      image: "/images/img12.webp",
      href: "/projects/hospitals",
      projects: ["Aga Khan Annex", "MediCare Center", "Hope Clinic"],
    },
    {
      title: "Business Towers",
      description:
        "Skyscrapers and office complexes designed for innovation and sustainable development.",
      image: "/images/img11.webp",
      href: "/projects/business-towers",
      projects: ["Skyline Tower", "Nairobi Trade Center", "Unity House"],
    },
    {
      title: "Public Infrastructure",
      description:
        "Government and civic projects that strengthen community and national development.",
      image: "/images/img9.webp",
      href: "/projects/public-infrastructure",
      projects: ["Thika Super Bridge", "Machakos Station", "Public Works Dam"],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/img5.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold text-center z-10"
        >
          Our Projects
        </motion.h1>
      </section>

       <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects" },
          ]}
        />

      {/* PROJECT CATEGORIES */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-4"
          >
            Completed Projects
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of projects across different sectors —
            from state-of-the-art malls to major public infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projectCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-200"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-6">
                  {category.projects.map((proj, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      {proj}
                    </li>
                  ))}
                </ul>

                <Link href={category.href}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-red-600 font-semibold group"
                  >
                    View Details
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
