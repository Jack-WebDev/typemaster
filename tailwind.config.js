/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      clr100: "#f16718",
      clr200: "#ff9b62",
      clr300: "#162542",
      clr400: "#7b8bad",
      clr500: "#e8eff2",
    },
    fontFamily: {
      ff: ['Barlow', 'sans-serif'],
    },
    fontWeight: {
      fw500: 500,
      fw700: 700,
      fw900: 900,
    },
    extend: {},
  },
  plugins: [],
}