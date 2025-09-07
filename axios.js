import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // change if needed
});

// Optional: Add Authorization header if token exists
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
