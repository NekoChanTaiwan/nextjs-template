const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        logo: ['Ms Madi', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
