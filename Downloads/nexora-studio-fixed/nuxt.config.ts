export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  icon: {
    size: '1.2em',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Nexora',
    },
  },
  compatibilityDate: '2024-08-14',
})
