const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
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
