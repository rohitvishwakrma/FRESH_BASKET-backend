import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CareersPage = () => {
const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/'); // Navigates to the root route (main page)
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-green-600">Fresh Basket</h1>
          <p className="text-gray-600 mt-1">Grocery Delivery Solutions</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-4">
            <div className="hidden md:flex space-x-8">
             <Link to="/" className="text-gray-800 hover:text-green-600 font-medium">
                       Home
               </Link>
              <a href="#" className="text-gray-800 hover:text-green-600 font-medium">Opportunities</a>
              <a href="#" className="text-gray-800 hover:text-green-600 font-medium">Programmes</a>
              <a href="#" className="text-gray-800 hover:text-green-600 font-medium">About Us</a>
              <a href="#" className="text-gray-800 hover:text-green-600 font-medium">Our Culture</a>
              <a href="#" className="text-gray-800 hover:text-green-600 font-medium">Values</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover Your Potential With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              We build innovative grocery delivery solutions that connect local stores with customers.
              Join us in revolutionizing how people shop for their daily essentials.
            </p>
            <div className="border-t border-gray-200 my-8"></div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect Role</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Job Role</label>
                <input 
                  type="text" 
                  placeholder="e.g. Delivery Manager" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose Job Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Operations</option>
                  <option>Customer Service</option>
                  <option>Business Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose Job Location</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All Locations</option>
                  <option>Bangalore</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Hyderabad</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Where Do You Belong?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technology */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">TECHNOLOGY</h3>
                <p className="text-gray-600 mb-6">Build the platform that powers our grocery delivery network.</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition duration-300">
                  Explore →
                </button>
              </div>
            </div>

            {/* Operations */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">OPERATIONS</h3>
                <p className="text-gray-600 mb-6">Ensure smooth delivery operations and logistics.</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition duration-300">
                  Explore →
                </button>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">CUSTOMER SERVICE</h3>
                <p className="text-gray-600 mb-6">Deliver exceptional support to our customers and partners.</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition duration-300">
                  Explore →
                </button>
              </div>
            </div>

            {/* Business Development */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">BUSINESS DEVELOPMENT</h3>
                <p className="text-gray-600 mb-6">Expand our network of grocery partners and customers.</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition duration-300">
                  Explore →
                </button>
              </div>
            </div>

            {/* Marketing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">MARKETING</h3>
                <p className="text-gray-600 mb-6">Promote our services and engage with our community.</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition duration-300">
                  Explore →
                </button>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">DATA ANALYTICS</h3>
                <p className="text-gray-600 mb-6">Drive insights to improve our services and operations.</p>
                <button className="text-green-600 font-medium hover:text-green-700 transition duration-300">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;