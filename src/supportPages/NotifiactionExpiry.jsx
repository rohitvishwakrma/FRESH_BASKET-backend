import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/appContext";
import toast from "react-hot-toast";
// import axios from "../../axios"; // Not used, axiosInstance comes from context

const NotificationSettings = () => {
  const { axiosInstance, user, setUser } = useContext(AppContext);
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expiringProducts, setExpiringProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  // Load initial notification setting and fetch expiring products
  useEffect(() => {
    if (user) {
      setEnabled(user.notificationsEnabled ?? false);
      fetchExpiringProducts();
    }
  }, [user]);

  // Fetch expiring products from backend
  const fetchExpiringProducts = async () => {
    setProductsLoading(true);
    try {
      const { data } = await axiosInstance.get(
        "/api/product/expiring",
        { withCredentials: true }
      );
      setExpiringProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching expiring products:", error);
      toast.error("Failed to load expiring products");
    } finally {
      setProductsLoading(false);
    }
  };

  // Toggle notification setting
  const toggleNotifications = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axiosInstance.put(
        "/api/user/notifications",
        {
          notificationsEnabled: !enabled,
        },
        { withCredentials: true }
      );

      if (data.success) {
        setEnabled(data.notificationsEnabled);
        setUser((prev) => ({
          ...prev,
          notificationsEnabled: data.notificationsEnabled,
        }));
        toast.success(
          `Notifications ${data.notificationsEnabled ? "enabled" : "disabled"}`,
          { icon: data.notificationsEnabled ? "🔔" : "🔕" }
        );
      } else {
        toast.error(data.message || "Failed to update notification settings");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Format date for display
  const formatExpiryDate = (dateString) => {
    if (!dateString) return "No date";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Expiry Notification Settings
        </h1>
        <p className="text-gray-600">
          Manage your product expiry notifications and view upcoming expirations.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">
              Email Notifications
            </h2>
            <p className="text-gray-600">
              {enabled
                ? "You'll receive alerts about expiring products"
                : "Notifications are currently disabled"}
            </p>
          </div>

          <button
            onClick={toggleNotifications}
            disabled={loading}
            aria-pressed={enabled}
            aria-label="Toggle expiry notifications"
            className={`relative inline-flex items-center h-12 w-24 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              enabled ? "bg-indigo-600" : "bg-gray-300"
            } ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
          >
            <span
              className={`inline-block h-10 w-10 transform rounded-full bg-white shadow-md transition-transform ${
                enabled ? "translate-x-12" : "translate-x-1"
              } ${loading ? "opacity-80" : ""}`}
            >
              {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              )}
            </span>
          </button>
        </div>

        <div className="mt-4 text-center">
          <p
            className={`text-lg font-medium ${
              enabled ? "text-indigo-600" : "text-gray-500"
            }`}
          >
            {enabled ? (
              <span className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Notifications are active
              </span>
            ) : (
              "Notifications are inactive"
            )}
          </p>
          {loading && (
            <p className="mt-2 text-sm text-gray-500">Updating settings...</p>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Product Expirations
        </h2>

        {productsLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : expiringProducts.length > 0 ? (
          <div className="space-y-4">
            {expiringProducts.map((product) => (
              <div
                key={product._id || product.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    Expires on {formatExpiryDate(product.expiryDate)}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    new Date(product.expiryDate) < new Date()
                      ? "bg-red-100 text-red-800" // expired products in red
                      : new Date(product.expiryDate) <=
                        new Date(new Date().setDate(new Date().getDate() + 3))
                      ? "bg-yellow-100 text-yellow-800" // expiring soon
                      : "bg-green-100 text-green-800" // safe products
                  }`}
                >
                  {new Date(product.expiryDate) < new Date()
                    ? "Expired"
                    : "Expiring soon"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-2 text-gray-600">No expiring products found</p>
            <p className="text-sm text-gray-500 mt-1">
              {enabled
                ? "You'll be notified when products are near expiry"
                : "Enable notifications to get alerts"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationSettings;
