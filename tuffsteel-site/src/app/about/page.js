"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import MissionVisionSection from "@/components/MissionVisionSection";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Hassan Juma",
      position: "Chief Executive Officer",
      image: "/images/user1.webp",
    },
    {
      name: "Vikram Mashle",
      position: "Head of Operations",
      image: "/images/user2.webp",
    },
    {
      name: "Samuel Otieno",
      position: "Lead Engineer",
      image: "/images/user3.webp",
    },
    {
      name: "Grace Wambui",
      position: "Marketing Director",
      image: "/images/user4.webp",
    },
  ];

  return (
    <div className=""> {/* offset for fixed navbar */}
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/about.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold text-center z-10"
        >
          About Us
        </motion.h1>
      </section>

      {/* COMPANY STORY */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 border-2 border-gray-200 pt-12 pb-12 rounded-3xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              At TUFFSTEEL® LIMITED, we are the go to distributor for all your construction materials
               needs. You are assured of purchasing highest quality building materials endorsed and certified
                by the Kenya Bureau of Standards.  
              <br /><br />
              In the last 12 years that the company has been in existence, TUFFSTEEL® LIMITED has become synonymous
               with endurance, reliability and quality and is one of the leading suppliers of cement, steel, roofing
                solutions, Bitumen and industrial chemicals for construction use, in Kenya.
              <br /><br />
              TUFFSTEEL® LIMITED is committed to enhancing Kenya’s infrastructure by providing superior construction
               materials under one roof through our long standing partnerships with some of Kenya’s leading and expert
                manufacturers in the cement, steel, roofing solutions industries and other international companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MEET OUR TEAM SECTION */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            The people behind our success — dedicated professionals committed to
            quality, innovation, and service.
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-red-600 text-sm">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission Vision */}
      <MissionVisionSection />

      {/* IMAGE GALLERY SECTION */}
      <Gallery />
    </div>
  );
}
