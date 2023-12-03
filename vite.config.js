import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['c:/Users/user/Pictures/Picsart_23-01-31_09-32-02-946.jpg'], // Add other external modules if needed
    },
  },
});
