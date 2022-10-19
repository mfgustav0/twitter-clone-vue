/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'very-dark': '#202327',
        'very-dark-400': '#1d1f23',
        'very-dark-800': '#16181c',
        'vivid-blue': '#1d9bf0'
      },
    },
  },
  plugins: [],
}
