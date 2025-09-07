import React, { useState } from "react";
import axios from "axios";
import  'remixicon/fonts/remixicon.css'
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">
        {/* Left Section - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or feedback? Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800"><i class="ri-map-pin-fill" style={{color:"green"}}></i> Address</h4>
              <p className="text-gray-600">123 Main Street, New Delhi, India</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800"><i class="ri-phone-fill" style={{color:"gray"}}></i> Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800"><i class="ri-mail-line" style={{color:"gray"}}></i> Email</h4>
              <p className="text-gray-600">support@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none transition-all"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
