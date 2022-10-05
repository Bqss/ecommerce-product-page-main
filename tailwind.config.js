/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{jsx,ts,js,tsx}"],
  theme: {
      extend: {
          colors: {
              "Orange": "hsl(var(--Orange))",
              "pale-orange": "hsl(var(--Paleorange))",
              "very-darkblue": "hsl(var(--Verydarkblue))",
              "dark-grayishblue": "hsl(var(--Darkgrayishblue))",
              "grayishblue": "hsl(var(--Grayishblue))",
              "light-grayishblue": "hsl(var(--Lightgrayishblue))",
              "lightbox": "hsla(var(--Lightbox))"
          }
      },
      fontFamily: {
          "kumbhSans" : "Kumbh Sans , sans-serif"
      },
      
    },
  
  
  plugins: [], 
}
