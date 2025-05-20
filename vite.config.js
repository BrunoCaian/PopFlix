import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('firebase')) return 'firebase'
          if (id.includes('react-toastify')) return 'toastify'
          if (id.includes('lottie-react')) return 'lottie'
          if (id.includes('react-loader-spinner')) return 'loader'
          if (id.includes('react')) return 'react'
        }
      }
    },
  },
  preview: {
    historyApiFallback: true,
  }
})