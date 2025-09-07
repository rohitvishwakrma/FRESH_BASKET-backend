// src/FoodStorageGuide.jsx
import React, { useState } from "react";

const FoodStorageGuide = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Vegetable", "Fruit", "Grocery", "Drink"];

  const items = [
    // ================= VEGETABLES (10 items) =================
    {
      name: "Spinach",
      category: "Vegetable",
      img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",details: "Wrap in paper towel, store in perforated bag in fridge.",
      duration: "4-6 days",
      tip: "Keep away from ethylene fruits.",
    },
    { name: "Tomatoes", category: "Vegetable", img: "https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", details: "Keep at room temperature until ripe, then refrigerate if needed.", duration: "3-5 days at room temp, 1 week in fridge", tip: "Avoid plastic bags." },
    { name: "Potatoes", category: "Vegetable", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", details: "Store in cool, dark, ventilated place. Don't refrigerate.", duration: "2-3 weeks", tip: "Keep away from onions." },
    { name: "Carrots", category: "Vegetable", img: "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", details: "Remove tops, keep in airtight bag in fridge.", duration: "2-3 weeks", tip: "Soak in water if limp." },
    { name: "Cucumber", category: "Vegetable", img: "https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", details: "Wrap in paper towel, refrigerate.", duration: "5-7 days", tip: "Keep away from bananas." },
    { name: "Bell Peppers", category: "Vegetable", img: "https://images.unsplash.com/photo-1592801062201-04fd6cf3d5ed?q=80&w=687&auto=format&fit=crop&w=200&q=40", details: "Refrigerate in plastic bag.", duration: "1-2 weeks", tip: "Avoid cutting until ready to use." },
    { name: "Mushrooms", category: "Vegetable", img: "https://images.unsplash.com/photo-1666379262545-00091ea71c40?q=80&w=735&auto=format", details: "Keep in paper bag in fridge.", duration: "3-5 days", tip: "Don't store in plastic." },
    { name: "Broccoli", category: "Vegetable", img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc", details: "Store unwashed in fridge drawer.", duration: "5-7 days", tip: "Wrap in damp towel." },
    { name: "Cauliflower", category: "Vegetable", img: "https://images.unsplash.com/photo-1566842600175-97dca489844f", details: "Keep unwashed in plastic bag in fridge.", duration: "1 week", tip: "Store stem-side down." },
    { name: "Lettuce", category: "Vegetable", img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", details: "Keep in perforated bag in fridge.", duration: "7-10 days", tip: "Crisper drawer works best." },

    // ================= FRUITS (10 items) =================
  { name: "Strawberries", category: "Fruit", img: "https://images.unsplash.com/photo-1623010424571-c1c8d09b475c", duration: "2-3 days", tip: "Wash before eating, not before storing." },
  { name: "Bananas", category: "Fruit", img: "https://images.unsplash.com/photo-1640958900081-7b069dd23e9c", details: "Store at room temperature.", duration: "2-5 days", tip: "Keep away from ethylene-sensitive produce." },
  { name: "Mangoes", category: "Fruit", img: "https://images.unsplash.com/photo-1669207334420-66d0e3450283?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Store at room temperature until ripe, then refrigerate.", duration: "1 week", tip: "Do not refrigerate unripe mangoes." },
  { name: "Apples", category: "Fruit", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate in crisper drawer.", duration: "2-4 weeks", tip: "Keep away from bananas." },
  { name: "Grapes", category: "Fruit", img: "https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate in ventilated container.", duration: "5-7 days", tip: "Do not wash before storing." },
  { name: "Oranges", category: "Fruit", img: "https://plus.unsplash.com/premium_photo-1669631944923-75bbc991f223?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Store at room temperature or refrigerate.", duration: "1-2 weeks", tip: "Avoid moisture." },
  { name: "Pineapple", category: "Fruit", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", details: "Refrigerate after cutting.", duration: "3-5 days", tip: "Keep covered." },
  { name: "Blueberries", category: "Fruit", img: "https://images.unsplash.com/photo-1600274737421-4813870867dd?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate in container.", duration: "5-7 days", tip: "Do not wash before storing." },
  { name: "Cherries", category: "Fruit", img: "https://plus.unsplash.com/premium_photo-1688671923138-ff74e0f9a810?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate in container.", duration: "3-5 days", tip: "Keep stems intact." },
  { name: "Peaches", category: "Fruit", img: "https://images.unsplash.com/photo-1570978561297-793391262fea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Store at room temperature until ripe, then refrigerate.", duration: "2-3 days", tip: "Do not refrigerate unripe peaches." },
    
  // ================= GROCERY (10 items) =================
  { name: "Wheat Flour", category: "Grocery", img: "https://images.unsplash.com/photo-1714842981153-ffeaf74e7a1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Airtight container, keep cool.", duration: "3-4 months", tip: "Refrigerate for longer." },
  { name: "Dal (Lentils)", category: "Grocery", img: "https://images.unsplash.com/photo-1577111174747-64977c90dd30?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Airtight container, keep dry.", duration: "6-12 months", tip: "Sun-dry occasionally." },
  { name: "Besan (Gram Flour)", category: "Grocery", img: "https://plus.unsplash.com/premium_photo-1755174757420-f4990bf672dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Airtight box, keep cool.", duration: "3-4 months", tip: "Avoid moisture." },
  { name: "Coffee Powder", category: "Grocery", img: "https://images.unsplash.com/photo-1659055939237-bc2be8be2f14?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Jar in fridge.", duration: "3 months", tip: "Seal tightly." },
  { name: "Butter", category: "Grocery", img: "https://plus.unsplash.com/premium_photo-1700088853545-e6529edb2d25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate, keep covered.", duration: "1-2 weeks", tip: "Avoid leaving out." },
  { name: "Cheese", category: "Grocery", img: "https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate, keep wrapped.", duration: "1-2 weeks", tip: "Do not leave at room temp." },
  { name: "Yogurt", category: "Grocery", img: "https://images.unsplash.com/photo-1552320764-9fc870798a3f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate immediately.", duration: "1 week", tip: "Check expiry date." },
  { name: "Cream", category: "Grocery", img: "https://images.unsplash.com/photo-1622737338437-39a24c37f0de?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate.", duration: "3-5 days", tip: "Use quickly." },
  { name: "Curd", category: "Grocery", img: "https://images.unsplash.com/photo-1581868164904-77b124b80242?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Keep in fridge.", duration: "1 week", tip: "Keep covered." },
  { name: "Paneer", category: "Grocery", img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate in water or airtight container.", duration: "1 week", tip: "Change water daily." },
    
  // ================= DRINKS (10 items) =================
   { name: "Milk", category: "Drink", img: "https://images.unsplash.com/photo-1602153508753-4ace888c10a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate at 0-4°C.", duration: "5-7 days", tip: "Check expiry date." },
  { name: "Fresh Juice", category: "Drink", img: "https://plus.unsplash.com/premium_photo-1681826633566-eeb271980a61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate immediately.", duration: "1-2 days", tip: "Consume fresh." },
  { name: "Smoothie", category: "Drink", img: "https://images.unsplash.com/photo-1610622930110-3c076902312a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate immediately.", duration: "1 day", tip: "Consume quickly." },
  { name: "Coconut Water", category: "Drink", img: "https://images.unsplash.com/photo-1535922964111-cf1f1e862dcc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate after opening.", duration: "1-2 days", tip: "Keep sealed." },
  { name: "Buttermilk", category: "Drink", img: "https://images.unsplash.com/photo-1658333389103-5cfad6203e0c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate.", duration: "2-3 days", tip: "Keep covered." },
  { name: "Fresh Lemon Juice", category: "Drink", img: "https://plus.unsplash.com/premium_photo-1664392090012-c0a7268964f4?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate.", duration: "3-4 days", tip: "Keep in airtight bottle." },
  { name: "Strawberry Smoothie", category: "Drink", img: "https://plus.unsplash.com/premium_photo-1727119506444-6a9feb551521?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate immediately.", duration: "1 day", tip: "Consume fresh." },
  { name: "Vegetable Juice", category: "Drink", img: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate immediately.", duration: "1-2 days", tip: "Consume quickly." },
  { name: "Tomato Juice", category: "Drink", img: "https://images.unsplash.com/photo-1576874240748-795e3bfa4c5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate.", duration: "2-3 days", tip: "Shake before use." },
  { name: "Yogurt Drink", category: "Drink", img: "https://plus.unsplash.com/premium_photo-1669680784119-1f2ac0260295?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Refrigerate.", duration: "2-3 days", tip: "Keep covered." },
  ];

  // Filter logic by search & category
  const filteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 bg-[#f9f9f9] min-h-screen">
      {/* Header */}
      <header
        className="text-center p-6 sm:p-8 rounded-xl mb-6 sm:mb-8"
        style={{ background: "linear-gradient(to right, #4CAF50, #8BC34A)" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Food Storage Guide
        </h1>
        <p className="text-white/80 mt-2 text-sm sm:text-base">
          Learn how to store perishable food and drinks properly.
        </p>
      </header>

      {/* Search & Category Filters */}
      {selectedIndex === null && (
        <>
          <div className="mb-4 text-center px-4">
            <input
              type="text"
              placeholder="Search by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-2/3 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm sm:text-base"
            />
          </div>
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#4CAF50] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Item List */}
      {selectedIndex === null && (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg cursor-pointer transition overflow-hidden"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs bg-[#C8E6C9] text-[#2E7D32] px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <h2 className="text-lg font-semibold text-[#2E7D32] mt-2">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-3 text-center text-gray-500 py-8">
              <i className="fas fa-search text-3xl mb-3 text-[#4CAF50]"></i>
              <p className="text-lg">No items found. Try a different search term.</p>
            </div>
          )}
        </div>
      )}

      {/* Detail View */}
      {selectedIndex !== null && (
        <div className="p-4 sm:p-6 bg-white rounded-xl shadow border border-gray-200 mx-4 max-w-full">
          <img
            src={filteredItems[selectedIndex].img}
            alt={filteredItems[selectedIndex].name}
            className="w-full min-h-auto sm:h-100 object-contain rounded-lg mb-"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-[#2E7D32] mb-2">
            {filteredItems[selectedIndex].name}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Category: {filteredItems[selectedIndex].category}
          </p>
          <p className="text-[#333] mb-2">
            <b>Storage:</b> {filteredItems[selectedIndex].details}
          </p>
          <p className="text-[#555] mb-2">
            <b>Duration:</b> {filteredItems[selectedIndex].duration}
          </p>
          <p className="text-[#666] italic mb-6">Spinach
            <b>Tip:</b> {filteredItems[selectedIndex].tip}
          </p>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={selectedIndex === 0}
              className="px-4 sm:px-5 py-2 bg-[#8BC34A] text-white rounded-full disabled:opacity-50 hover:bg-[#2E7D32] text-sm sm:text-base"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedIndex === filteredItems.length - 1}
              className="px-4 sm:px-5 py-2 bg-[#4CAF50] text-white rounded-full disabled:opacity-50 hover:bg-[#2E7D32] text-sm sm:text-base"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSelectedIndex(null)}
              className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 text-sm sm:text-base"
            >
              Back to List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodStorageGuide;
