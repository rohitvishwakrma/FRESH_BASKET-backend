// src/QuickSeasonalRecipes.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuickSeasonalRecipes = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const recipes = [
    {
      title: "Summer Berry Salad",
      ingredients: "Mixed greens, fresh berries, feta cheese, walnuts, light vinaigrette",
      preparation: "Toss greens with berries and cheese. Top with walnuts and drizzle with dressing.",
      video: "https://www.youtube.com/embed/SodNsUACpL8",
      thumbnail: "https://img.youtube.com/vi/SodNsUACpL8/hqdefault.jpg",
    },
    {
      title: "Grilled Vegetable Skewers",
      ingredients: "Bell peppers, zucchini, mushrooms, cherry tomatoes, olive oil, herbs",
      preparation: "Thread vegetables onto skewers, brush with oil and herbs. Grill for 10-12 minutes, turning occasionally.",
      video: "https://www.youtube.com/embed/3pLUwXFv0RE",
      thumbnail: "https://img.youtube.com/vi/3pLUwXFv0RE/hqdefault.jpg",
    },
    {
      title: "Zucchini Noodles with Pesto",
      ingredients: "Zucchini, basil pesto, cherry tomatoes, Parmesan cheese",
      preparation: "Spiralize zucchini and toss with pesto. Top with halved tomatoes and shaved Parmesan.",
      video: "https://www.youtube.com/embed/SGwYSrMzUhw",
      thumbnail: "https://img.youtube.com/vi/SGwYSrMzUhw/hqdefault.jpg",
    },
    {
      title: "Watermelon Mint Cooler",
      ingredients: "Watermelon, fresh mint, lime juice, ice",
      preparation: "Blend watermelon with mint and lime juice. Strain and serve over ice.",
      video: "https://www.youtube.com/embed/fbXY5rwjek8",
      thumbnail: "https://img.youtube.com/vi/fbXY5rwjek8/hqdefault.jpg",
    },
    {
      title: "Stone Fruit Parfait",
      ingredients: "Peaches, plums, nectarines, Greek yogurt, granola, honey",
      preparation: "Layer sliced fruits with yogurt and granola. Drizzle with honey before serving.",
      video: "https://www.youtube.com/embed/Mak_PuVFxfo",
      thumbnail: "https://img.youtube.com/vi/Mak_PuVFxfo/hqdefault.jpg",
    },
    {
      title: "Paneer Butter Masala",
      ingredients: "Paneer, tomatoes, butter, cream, onion, ginger, garlic, spices",
      preparation: "Cook onion, ginger, garlic. Add tomatoes and spices. Blend to make gravy. Add paneer cubes and cream. Simmer and serve hot.",
      video: "https://www.youtube.com/embed/U1LVDFwi8qI",
      thumbnail: "https://img.youtube.com/vi/U1LVDFwi8qI/hqdefault.jpg",
    },
  ];

  const tips = [
    "Wash and chop vegetables as soon as you get them home",
    "Pre-make dressings and sauces for quick assembly",
    "Portion snacks into containers for easy grabbing",
    "Cook grains in larger batches to use throughout the week",
  ];

  const handlePlay = (index) => setActiveVideo(index);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
          Quick & Easy Seasonal Recipes
        </h1>
        <p className="text-sm text-gray-500">Published on: July 1, 2025</p>
      </header>

      {/* Search Bar */}
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search recipes by name or ingredients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
      </div>

      {/* Recipes Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Quick Seasonal Recipes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {filteredRecipes.map((recipe, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl shadow-xl bg-gradient-to-br from-green-50 to-green-100 transition-transform"
            >
              <h3 className="text-2xl font-bold text-green-800">{recipe.title}</h3>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Ingredients:</span> {recipe.ingredients}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Preparation:</span> {recipe.preparation}
              </p>

              {/* Video */}
                {recipe.video && (
  <div className="mt-4 relative">
    {activeVideo === idx ? (
      <div className="relative w-full h-60 md:h-64 rounded-2xl shadow-lg overflow-hidden">
        {/* Loader while iframe is loading */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-10" id={`loader-${idx}`}>
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <iframe
          className="w-full h-full rounded-2xl"
          src={recipe.video + "?autoplay=1"}
          title={recipe.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => {
            const loader = document.getElementById(`loader-${idx}`);
            if (loader) loader.style.display = "none"; // Hide loader when video loads
          }}
        />
      </div>
    ) : (
      <div
        className="relative cursor-pointer overflow-hidden rounded-2xl shadow-xl"
        onClick={() => handlePlay(idx)}
      >
        <img
          src={recipe.thumbnail}
          alt={recipe.title}
          className="w-full h-60 md:h-64 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white bg-opacity-90 p-4 rounded-full shadow-xl flex items-center justify-center">
            <i className="ri-play-fill text-red-600 text-3xl"></i>
          </div>
        </div>
      </div>
    )}
  </div>
)}

            </div>
          ))}
          {filteredRecipes.length === 0 && (
            <p className="col-span-2 text-center text-gray-500 text-lg mt-4">
              No recipes found.
            </p>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-green-900 bg-opacity-70 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center">Meal Prep Tips</h2>
        <ul className="space-y-3">
          {tips.map((tip, idx) => (
            <li key={idx} className="text-yellow-100 text-lg border-l-4 border-yellow-400 pl-4">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-8">
        <Link to="/">
          <button className="px-6 py-3 text-white text-lg font-medium rounded-full shadow-md bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuickSeasonalRecipes;
