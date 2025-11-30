import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/web-api/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})