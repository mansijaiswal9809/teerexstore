/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        crimson:{
          500:"rgb(226, 55, 89)",
          700:"crimson"
        }
      },
      transitionDuration:{
        1000:"1000ms",
        2000:"2000ms"
      },
      screens:{
        "mymd":"700px",
        "mysm":"400px",
        "mylg":"1000px"
      }
    },
    variant:{
      extend:{
        back:["active"]
      }
    }
  },
  plugins: [],
}