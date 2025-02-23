import { defineConfig } from "vite";

const PORT = 4000;

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: PORT,
    host: true,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
