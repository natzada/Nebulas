/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",        
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3",
        secondary: "#f8f8f8",
        greenF: "#558B2F",
        blueF: "#5263B5",
        yellowF: "#D2BE2D",
        text1: "#3b3b3b",      
        text2: "#64C05D",
        textmuted: "#d4d2d2",
        
        darkbg: "#464646",    
        darktext: "#CECECE",  
      },
    },
  },
  plugins: [],
}