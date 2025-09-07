import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    cartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to="/">
        <h2 className="text-2xl font-bold text-primary">Fresh Basket</h2>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/products" className="hover:text-indigo-600 transition">All Products</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full hover:border-indigo-400 transition">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
            value={searchQuery}
          />

          {/* Search Icon - Corrected SVG attributes */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M10.836 10.615L15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Cart Icon - Corrected SVG attributes */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer hover:opacity-80 transition">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {cartCount() > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {cartCount()}
            </span>
          )}
        </div>

        {user ? (
          <div className="relative group">
            <img 
              src={assets.profile_icon} 
              alt="User profile" 
              className="w-10 h-10 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-indigo-300 transition"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-lg border border-gray-200 py-2 w-40 rounded-md z-40 text-sm">
              <li
                onClick={() => navigate("/my-orders")}
                className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 transition"
              >
                My Orders
              </li>
              <li 
                className="px-3 py-1.5 cursor-pointer hover:bg-gray-100 transition" 
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm md:text-base"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-6 md:hidden">
        {/* Mobile Cart Icon - Corrected SVG attributes */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {cartCount() > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {cartCount()}
            </span>
          )}
        </div>

        {/* Mobile Menu Button - Corrected SVG attributes */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden p-1"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx="0.75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx="0.75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx="0.75" fill="#426287" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-lg py-4 flex-col items-start gap-4 px-5 text-sm md:hidden z-30`}
      >
        <Link 
          onClick={() => setOpen(false)} 
          to="/"
          className="w-full py-2 border-b border-gray-100 hover:text-indigo-600 transition"
        >
          Home
        </Link>
        <Link 
          onClick={() => setOpen(false)} 
          to="/products"
          className="w-full py-2 border-b border-gray-100 hover:text-indigo-600 transition"
        >
          Products
        </Link>
        <Link 
          onClick={() => setOpen(false)} 
          to="/About"
          className="w-full py-2 border-b border-gray-100 hover:text-indigo-600 transition"
        >
          About
        </Link>

        {user ? (
          <div className="w-full py-2">
            <div 
              onClick={() => navigate("/my-orders")}
              className="cursor-pointer py-2 hover:text-indigo-600 transition"
            >
              My Orders
            </div>
            <div 
              onClick={logout}
              className="cursor-pointer py-2 hover:text-indigo-600 transition"
            >
              Logout
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="w-full mt-2 cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;