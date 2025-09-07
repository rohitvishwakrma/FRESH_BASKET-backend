// import React, { useState } from "react";

// const CustomerHelp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [status, setStatus] = useState({ type: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus({ type: "error", message: "All fields are required" });
//       return;
//     }

//     setLoading(true);
//     setStatus({ type: "", message: "" });

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatus({ type: "success", message: data.message });
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus({ type: "error", message: data.error || data.message });
//       }
//     } catch (err) {
//       setStatus({ type: "error", message: "Server error, please try again" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//           Customer Help Desk
//         </h1>
//         <p className="text-gray-600 text-center mb-6">
//           Have a question or problem? Send us a message and our team will help you.
//         </p>

//         {status.message && (
//           <div
//             className={`p-3 mb-4 text-center rounded-lg ${
//               status.type === "success"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {status.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your full name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-300 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-300 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Message</label>
//             <textarea
//               name="message"
//               placeholder="Describe your issue or question..."
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-300 outline-none"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-60"
//           >
//             {loading ? "Sending..." : "Submit Request"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CustomerHelp;



import React from "react";
import { Link } from "react-router-dom";

const CustomerHelpDesk = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Customer Help Desk
        </h1>
        <p className="text-gray-600 text-center mb-6">
          We’re here to help you! You can browse FAQs, reach out for support,
          or send us a message directly.
        </p>

        {/* Help Options */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">FAQs</h2>
            <p className="text-gray-600 mb-4">
              Find quick answers to common questions.
            </p>

             <Link
              to="/Faqs"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                 View FAQs
            </Link>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              Have a question? Get in touch with our support team.
            </p>
            {/* Link to Contact Us page */}
            <Link
              to="/Contactus"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Go to Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHelpDesk;
