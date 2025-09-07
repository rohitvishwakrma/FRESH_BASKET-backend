import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Healthy Fruits You Should Buy This Season",
    date: "2025-08-01",
    excerpt:
      "Discover the freshest fruits packed with nutrients that can boost your health and energy.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80",
    link: "/products", // example path
  },
  {
    id: 2,
    title: "How to Store Vegetables to Keep Them Fresh Longer",
    date: "2025-07-15",
    excerpt:
      "Simple tips to prolong the freshness of your groceries and reduce food waste.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
    link: "/store-vegetables", // example path
  },
  {
    id: 3,
    title: "Easy & Quick Recipes Using Seasonal Grocery Items",
    date: "2025-07-01",
    excerpt:
      "Try these delicious recipes made from fresh groceries delivered by Fresh Basket.",
    image: "https://images.unsplash.com/photo-1514517181577-c07ec9dbd9cc?w=600&q=80",
    link: "/quick-seasonal-recipes", 
  },
];

export default function BlogSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-6xl mx-auto py-12 px-6"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-green-700">
        From Our Blog
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map(({ id, title, date, excerpt, image, link }) => (
          <article
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <time
                className="block text-sm text-gray-400 mb-2"
                dateTime={date}
              >
                {new Date(date).toLocaleDateString()}
              </time>
              <h3 className="text-xl font-semibold text-green-800 hover:text-green-600 mb-3">
                {title}
              </h3>
              <p className="text-gray-600">{excerpt}</p>
              <Link
                to={link}
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
