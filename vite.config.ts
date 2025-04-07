import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Inspect from 'vite-plugin-inspect';
import * as path from 'path';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), Inspect()],
  build: {
    rollupOptions: {
      external: ['/Remainders/**'],
    },
    sourcemap: true,
  },
});
