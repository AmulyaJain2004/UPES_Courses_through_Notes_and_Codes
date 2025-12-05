import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { API_BASE_URL } from "./config/api";

// Log API configuration on app start
console.log("🚀 App starting with API URL:", API_BASE_URL);
console.log("📍 Environment:", import.meta.env.MODE);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
