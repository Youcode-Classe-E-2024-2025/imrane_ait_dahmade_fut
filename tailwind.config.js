/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./.*html"],
  theme: {
    extend: {
      colors:{
      'dark': "#282C2F",
      },
      fontFamily: {
        CF: ["Turret Road","sans-serif"],
        Mont: ["Montserrat", "sans-serif",],
      },
      backgroundImage: {
        'custom-bg': "url('/images/terrain.jpg')", 
        'carte-bg': "url('/images/bg-ajouter.jpg')", 

      },
    },
  },
  plugins: [],
}