// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'development' 
    ? 'http://localhost:8000/api' 
    : 'https://upes-courses-through-notes-and-codes-1.onrender.com/api');

export { API_BASE_URL };
