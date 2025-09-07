import React from "react";

const partners = [
  {
    id: 1,
    name: "FreshFarm Grocers",
    logo: "https://via.placeholder.com/120x60?text=FreshFarm",
    website: "https://freshfarmgrocers.com",
  },
  {
    id: 2,
    name: "GreenLeaf Farms",
    logo: "https://via.placeholder.com/120x60?text=GreenLeaf",
    website: "https://greenleaffarms.com",
  },
  {
    id: 3,
    name: "QuickDeliver Logistics",
    logo: "https://via.placeholder.com/120x60?text=QuickDeliver",
    website: "https://quickdeliver.com",
  },
  {
    id: 4,
    name: "Urban Organic Market",
    logo: "https://via.placeholder.com/120x60?text=Urban+Organic",
    website: "https://urbanorganicmarket.com",
  },
];

export default function Partners() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-700">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
        {partners.map(({ id, name, logo, website }) => (
          <a
            key={id}
            href="/seller"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-4 border rounded-lg shadow hover:shadow-lg transition"
            aria-label={`Visit ${name}`}
          >
            <img src={logo} alt={`${name} logo`} className="max-h-16" />
          </a>
        ))}
      </div>
    </section>
  );
}
