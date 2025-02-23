import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const PORT = 4000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: PORT,
    host: true,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
