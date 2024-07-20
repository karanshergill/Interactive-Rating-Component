/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'Primary-Organge' : 'hsl(25, 97%, 53%)',
        'Neutral-White' : 'hsl(0, 0%, 100%)',
        'Neutral-Light-Grey' : 'hsl(217, 12%, 63%)',
        'Neutral-Dark-Blue' : 'hsl(213, 19%, 18%)',
        'Neutral-Very-Dark-Blue' :'hsl(216, 12%, 8%)'
      },
      fontFamily: {
        'Overpass' : ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}