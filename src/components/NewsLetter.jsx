import { useNavigate } from "react-router-dom";

const NewsLetter = () => {
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const isUserRegistered = localStorage.getItem("userToken");
    if (!isUserRegistered) {
      navigate("/login");
    } else {
      // Handle newsletter subscription logic here for registered users
      alert("Thank you for subscribing!");
    }
  };

  return (
    <div className="my-20 flex justify-center">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            📩 Stay in the Loop
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6">
            Join our newsletter for <span className="font-semibold">exclusive offers</span>, fresh arrivals, and the latest deals.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition-all"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;