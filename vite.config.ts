import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true,
    port: 9040,
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
      "@static": path.resolve(__dirname, "./public/static"),
      "@legal-person": path.resolve(__dirname, "./src/modules/legal-person"),
    },
  },
  build: {
    rollupOptions: {
      external: ["@shared"],
    },
  },
});
