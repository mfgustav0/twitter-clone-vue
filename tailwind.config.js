/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark': {
          DEFAULT: '#202327',
          '400': '#1d1f23',
          '200': 'rgb(41 43 48 / 95%)',
          '800': '#16181c',
        },
        'vivid-blue': {
          light: '#1d9bf01a',
          DEFAULT: '#1d9bf0',
          dark: '#1d9bf0',
        },
        'green-tweet': {
          light: '#00ba7c',
          dark: 'rgba(0, 186, 124, 0.1)',
        },
        'heart-tweet': {
          light: '#f91880', 
          dark: '#f918801a'
        },
        'logout': '#242d34',
      },
      boxShadow: {
        full: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px'
      },
    },
    fontFamily: {
      helvetica: ['HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', 'sans-serif'],
    },
  },
  plugins: []
}
