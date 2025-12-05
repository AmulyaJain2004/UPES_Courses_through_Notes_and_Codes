// API Configuration
const isDevelopment = import.meta.env.MODE === "development";
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (isDevelopment
    ? "http://localhost:8000/api"
    : "https://upes-courses-through-notes-and-codes-1.onrender.com/api");

// Log the API URL in development for debugging
if (isDevelopment) {
  console.log("API Base URL:", API_BASE_URL);
}

export { API_BASE_URL };
