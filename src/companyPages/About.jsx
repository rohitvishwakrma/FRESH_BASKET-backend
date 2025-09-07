import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

export default function About() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      
    >  <div
        className="h-screen  bg-cover bg-center w-full flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543362906-acfc16c67564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc4fHxmcnVpdHN8ZW58MHx8MHx8fDA%3D')",
        }}
      >

      <div className="max-w-4xl bg-white shadow-xl rounded-3xl p-10 text-gray-800 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-6 text-center">
          About Me & My Project
          </h1>
          <p className="text-lg leading-relaxed mb-6">
          Hi! I’m <span className="font-semibold text-pink-500">Rohit Vishwakarma</span>, a passionate web developer focused on building smooth and reliable user experiences.
           </p>
                 <p className="text-lg leading-relaxed mb-6">
                  This project is a modern grocery delivery app called{" "}
                 <a href="/products" className="font-semibold text-indigo-600 hover:underline">
                 Fresh Basket
                </a>
            , designed to bring fresh groceries right to your doorstep with quality and convenience.
          </p>



            <h2 className="text-2xl font-bold mt-10 mb-4 text-indigo-700">Technologies Used</h2>
            <ul className="grid grid-cols-3 gap-6 mb-8 text-indigo-800 text-lg">
          <li className="flex items-center gap-3">
            <FaReact className="text-blue-500 w-7 h-7" />
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              React.js & React Router
            </a>
          </li>
          <li className="flex items-center gap-3">
            <SiTailwindcss className="text-teal-400 w-7 h-7" />
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Tailwind CSS
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaNodeJs className="text-green-600 w-7 h-7" />
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Node.js & Express
            </a>
          </li>
          <li className="flex items-center gap-3">
            <SiMongodb className="text-green-700 w-7 h-7" />
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              MongoDB
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaCloud className="text-purple-600 w-7 h-7" />
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Cloud Deployment
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub className="text-gray-900 w-7 h-7" />
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Git & GitHub
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Connect with me</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/rohitvishwakrma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition transform hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-vishwakarma-915143288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-pink-500 transition transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18v-7.34H5.67V18h2.67zm-1.33-8.5c.86 0 1.56-.7 1.56-1.56S7.87 6.38 7.01 6.38 5.45 7.08 5.45 7.94s.7 1.56 1.56 1.56zm11 8.5v-4.07c0-2.43-1.3-3.56-3.03-3.56-1.4 0-2.04.77-2.4 1.32v-1.51H8.57V18h2.67v-3.67c0-.98.17-1.91 1.39-1.91 1.19 0 1.2 1.15 1.2 1.99V18h2.67z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/rohi8_vishwakarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition transform hover:scale-125"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-shadow shadow-md hover:shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div> 
</div>


      {/* <div className="max-w-4xl bg-white shadow-xl rounded-3xl p-10 text-gray-800 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-6 text-center">
          About Me & My Project
          </h1>
          <p className="text-lg leading-relaxed mb-6">
          Hi! I’m <span className="font-semibold text-pink-500">Rohit Vishwakarma</span>, a passionate web developer focused on building smooth and reliable user experiences.
           </p>
                 <p className="text-lg leading-relaxed mb-6">
                  This project is a modern grocery delivery app called{" "}
                 <a href="/products" className="font-semibold text-indigo-600 hover:underline">
                 Fresh Basket
                </a>
            , designed to bring fresh groceries right to your doorstep with quality and convenience.
          </p>



            <h2 className="text-2xl font-bold mt-10 mb-4 text-indigo-700">Technologies Used</h2>
            <ul className="grid grid-cols-3 gap-6 mb-8 text-indigo-800 text-lg">
          <li className="flex items-center gap-3">
            <FaReact className="text-blue-500 w-7 h-7" />
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              React.js & React Router
            </a>
          </li>
          <li className="flex items-center gap-3">
            <SiTailwindcss className="text-teal-400 w-7 h-7" />
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Tailwind CSS
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaNodeJs className="text-green-600 w-7 h-7" />
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Node.js & Express
            </a>
          </li>
          <li className="flex items-center gap-3">
            <SiMongodb className="text-green-700 w-7 h-7" />
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              MongoDB
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaCloud className="text-purple-600 w-7 h-7" />
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Cloud Deployment
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub className="text-gray-900 w-7 h-7" />
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500 transition"
            >
              Git & GitHub
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Connect with me</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/rohitvishwakrma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition transform hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-vishwakarma-915143288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-pink-500 transition transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18v-7.34H5.67V18h2.67zm-1.33-8.5c.86 0 1.56-.7 1.56-1.56S7.87 6.38 7.01 6.38 5.45 7.08 5.45 7.94s.7 1.56 1.56 1.56zm11 8.5v-4.07c0-2.43-1.3-3.56-3.03-3.56-1.4 0-2.04.77-2.4 1.32v-1.51H8.57V18h2.67v-3.67c0-.98.17-1.91 1.39-1.91 1.19 0 1.2 1.15 1.2 1.99V18h2.67z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/rohi8_vishwakarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition transform hover:scale-125"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-shadow shadow-md hover:shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div> */}
    </motion.div>
  );
}
