import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const pressReleases = [
  {
    date: "2025-06-01",
    title: "Fresh Basket Expands Fresh Grocery Delivery to 5 New Cities",
    summary:
      "Our grocery delivery app is now available in Pune, Hyderabad, Chennai, Kolkata, and Ahmedabad — bringing fresh fruits, vegetables, and essentials closer to you.",
    link: "https://news.example.com/customer-bridge-expansion",
  },
  {
    date: "2025-04-15",
    title: "Fresh Basket Partners with Local Farmers for Fresh Produce",
    summary:
      "We’ve partnered with over 200 local farms to ensure fresh and organic groceries reach your doorstep faster than ever.",
    link: "https://technews.example.com/customer-bridge-farm-partnership",
  },
  {
    date: "2025-01-10",
    title: "Fresh Basket Launches Smart Grocery Recommendations",
    summary:
      "Our AI-driven app now offers personalized grocery suggestions based on your shopping habits and preferences.",
    link: "https://innovation.example.com/customer-bridge-ai-grocery",
  },
];

const featuredArticles = [
  {
    source: "The Economic Times",
    title: "Fresh Basket Reinvents Grocery Shopping Experience",
    link: "https://economictimes.com/customer-bridge",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },
  {
    source: "NDTV Food",
    title: "How Fresh Basket is Making Grocery Delivery Convenient & Fresh",
    link: "https://ndtv.com/customer-bridge-grocery",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600&q=80",
  },
];

export default function PressPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-h-full h-full bg-gradient-to-tr from-green-700 via-yellow-600 to-orange-500 p-8 text-white"
    >
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Fresh Basket in the News</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Read about our latest milestones, partnerships, and innovations in grocery delivery.
          <br />
          Media inquiries? Scroll down for contact info.
        </p>
      </header>

      {/* Press Releases */}
      <section className="max-w-5xl mx-auto bg-green-900 bg-opacity-70 rounded-xl p-8 mb-12 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">Press Releases</h2>
        <ul className="space-y-6">
          {pressReleases.map(({ date, title, summary, link }) => (
            <li key={title} className="border-l-4 border-yellow-400 pl-4">
              <p className="text-sm text-yellow-400 font-semibold">{new Date(date).toLocaleDateString()}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:text-yellow-300 transition"
              >
                {title}
              </a>
              <p className="mt-2 text-yellow-100">{summary}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Articles */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map(({ source, title, link, img }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white-900 bg-opacity-7 rounded-xl overflow-hidden shadow hover:shadow-white transition transform hover:scale-105"
              aria-label={`${source} article: ${title}`}
            >
              <img
                src={img}
                alt={`${source} logo`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-yellow-100">
                <p className="text-sm font-semibold text-yellow-300">{source}</p>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <footer className="max-w-5xl mx-auto py-6 text-center text-yellow-300">
        <p>
          For press and media inquiries, please email us at{" "}
          <a
            href="mailto:press@freshbasket.com"
            className="underline hover:text-yellow-100"
          >
            press@freshbasket.com
          </a>
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 transition px-5 py-2 rounded-full text-green-900 font-semibold"
        >
          ← Back to Home
        </button>
      </footer>
    </motion.div>
  );
}
