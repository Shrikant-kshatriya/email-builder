import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensure the app works with relative paths
  build: {
    outDir: 'dist', // Default build output folder
  },
})
