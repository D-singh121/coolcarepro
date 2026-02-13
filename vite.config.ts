
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // We cast to string and handle undefined/null at build time to prevent runtime ReferenceErrors
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "")
  },
  server: {
    port: 3000
  }
});
