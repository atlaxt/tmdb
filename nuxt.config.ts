import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
      apiToken: process.env.NUXT_PUBLIC_API_TOKEN,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
})
