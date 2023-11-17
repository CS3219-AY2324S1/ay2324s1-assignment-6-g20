import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
});
