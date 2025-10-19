import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/web-api/', // Замените на имя вашего репозитория
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movie: resolve(__dirname, 'movie.html'),
        anime: resolve(__dirname, 'anime.html'),
      },
    },
  },
})