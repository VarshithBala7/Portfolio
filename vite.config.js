import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If your repo is YOUR-USERNAME.github.io, you can remove or comment 'base'.
// If your repo is, for example, 'portfolio', set base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  // base: "/portfolio/",
});
