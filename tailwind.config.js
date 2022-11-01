/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark': '#202327',
        'very-dark-400': '#1d1f23',
        'very-dark-800': '#16181c',
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
  plugins: [
    // plugin(function({ addComponents }) {
    //   addComponents({
    //     '.scrollbar': {
    //       '&::-webkit-scrollbar': {
    //         'width': '1rem',
    //         'height': '1rem'
    //       },
    //       '&::-webkit-scrollbar-track': {
    //         'border-radius': '100vh',
    //         'background': '#f7f4ed',
    //       },
    //       '&::-webkit-scrollbar-thumb': {
    //         'background': 'rgb(48 51 54)',
    //         'border-radius': '100vh',
    //         'border': '3px solid #f6f7ed',
    //       },
    //       '&::-webkit-scrollbar-thumb:hover': {
    //         'background': 'rgb(29 31 35 / 1)',
    //       }
    //     },
    //   })
    // })
  ]
}
