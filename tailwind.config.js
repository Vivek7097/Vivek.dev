/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '900px',
        'sm': '500px',
        'lg':  '750px'
      }
    },
    fontFamily: {
      Mulish : ['Mulish', 'sans-serif', 'Be Vietnam Pro']
    }
  },
  plugins: [],
}

