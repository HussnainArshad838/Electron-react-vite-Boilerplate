import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Ensures relative paths for assets
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist', // Specifies the output directory for build files
    rollupOptions: {
      // Add Electron's entry file if you have one (for Electron-based projects)
      input: {
        main: './electron/main.js' // Change to the main file if using Electron
      },
      output: {
      
      },
    },
  },
  plugins: [react()],
})
