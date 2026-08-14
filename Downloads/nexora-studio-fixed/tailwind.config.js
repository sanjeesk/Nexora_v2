export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a1e4d',
          dark: '#051428',
        },
        accent: '#00bcd4',
        'accent-light': '#4dd0e1',
        success: '#4caf50',
        dark: {
          DEFAULT: '#0f1419',
          lighter: '#1a2332',
        },
      },
    },
  },
  plugins: [],
}
