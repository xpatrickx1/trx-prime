import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    svgr()
  ],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
