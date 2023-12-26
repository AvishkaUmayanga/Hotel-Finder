/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xmd': '819px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'mainBg': "url('./images/main-bg.jpg')",
        'funBg' : "url('./images/fun-bg.jpg')",
        'aboutusBg' : "url('./images/aboutus-bg.jpg')",
      },
    },
  },
  plugins: [],
}

