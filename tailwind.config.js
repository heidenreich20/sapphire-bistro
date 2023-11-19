/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Cinzel Decorative','ui-sans-serif', 'system-ui',],
        'body': ['Bellota','ui-sans-serif', 'system-ui',],
      },
      colors: {
       'main-text': "#EEEEF2",
       'alt': 'rgba(46, 38, 38, 0.7)'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {       
          "primary": "#e5e7eb",       
          "secondary": "#FFB900",
          "accent": "#009d2d",       
          "neutral": "#2f2f31",       
          "base-100": "#09090B",       
          "info": "#00edff",       
          "success": "#00cdac",       
          "warning": "#a45b00",       
          "error": "#ff002c",
        },
      },
    ],
  },
}