/** @type {import('tailwindcss').Config} */
export default {
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
        'primary-dark': '#003d99',
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
        ink: '#14181f',
      },
    },
  },
  plugins: [],
}
