import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: true,
    sourcemap: false,
    outDir: 'dist'
  },
  base: "/", // ensures paths resolve correctly
  server: {
    historyApiFallback: true // good for dev
  },
});