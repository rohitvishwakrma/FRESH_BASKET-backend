// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000", // change if needed
// });

// // Optional: Add Authorization header if token exists
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://freshbasket-backend-production.up.railway.app", // ✅ your deployed backend
  withCredentials: true, // ✅ allow cookies (important for authentication)
});

// ✅ Attach JWT token if present
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default axiosInstance;
