/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // <- C'est cette ligne qui manquait probablement !
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}