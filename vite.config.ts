import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

const PORT = 4000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), nunjucks()],
  server: {
    port: PORT,
    host: true,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
