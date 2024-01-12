/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "outfit": ['"Outfit"', 'sans-serif']
      },
      colors:{
        'veryDarkBlueBG':'hsl(217, 54%, 11%)',
        'veryDarkBlueCBG':'hsl(216, 50%, 16%)',
        'veryDarkBlueLine':'hsl(215, 32%, 27%)',
        'softBlue':'hsl(215, 51%, 70%)',
        'cyanPrimary':'hsl(178, 100%, 50%)',
      }
    },
  },
  plugins: [],
}

