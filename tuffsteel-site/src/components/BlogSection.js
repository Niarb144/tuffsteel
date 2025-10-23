"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building the Future of Steel Innovation",
    image: "/images/img5.webp",
    link: "/blog/building-the-future",
  },
  {
    id: 2,
    title: "Sustainable Metal Production for a Greener Tomorrow",
    image: "/images/img6.webp",
    link: "/blog/sustainability",
  },
  {
    id: 3,
    title: "How Tuffsteel Powers Kenya’s Growing Infrastructure",
    image: "/images/img7.webp",
    link: "/blog/infrastructure",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Latest Insights
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>

                <Link
                  href={post.link}
                  className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-900 transition-all relative"
                >
                  Read More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2 text-2xl"
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-block text-blue-700 font-semibold text-lg relative group"
          >
            View All Posts
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
