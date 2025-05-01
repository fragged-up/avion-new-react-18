import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
export default defineConfig({
  plugins: [react()],
  // base:process.env.VITE_BASE_PATH || '/avion-new-react-18',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  build: {
    sourcemap: true
  },
});
