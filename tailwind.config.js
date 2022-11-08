const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          "black": "#000000",
          "white": "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
