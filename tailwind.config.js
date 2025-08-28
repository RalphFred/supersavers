/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#FF4D00',
          2: '#ffdbcc'
        },
      },
    },
  },
  plugins: [],
}

