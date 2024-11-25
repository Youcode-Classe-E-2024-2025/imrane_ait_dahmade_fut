/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'CF': "Turret Road",
      },
      backgroundImage: {
        'custom-bg': "url('/images/terrain.jpg')", 
      },
    },
  },
  plugins: [],
}