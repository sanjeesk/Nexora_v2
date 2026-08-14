export default defineNuxtConfig({
  ssr: true,
  
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],

  tailwindcss: {
    config: {
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#0052CC',
              dark: '#003d99',
            },
            accent: {
              DEFAULT: '#5a3a7a',
              light: '#7c5294',
            },
            dark: {
              DEFAULT: '#0a0e27',
              lighter: '#1a1f3a',
            },
            text: {
              DEFAULT: '#374151',
              light: '#6b7280',
            },
          },
        },
      },
    },
  },

  icon: {
    size: '1em',
    class: 'icon',
    aliases: {},
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Nexora - Premium Digital Services including Web Design, Development, Branding & Digital Marketing',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" font-weight="bold" fill="%230052CC">N</text></svg>',
        },
      ],
    },
  },

  compatibilityDate: '2024-08-14',
})
