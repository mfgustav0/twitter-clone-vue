/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark': '#202327',
        'very-dark-400': '#1d1f23',
        'very-dark-800': '#16181c',
        'vivid-blue': '#1d9bf0',
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
  plugins: [],
}
