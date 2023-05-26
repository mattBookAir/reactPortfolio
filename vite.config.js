import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/reactPortfolio/",
  plugins: [react()],
  define: {
    "process.env": {},
  },
});