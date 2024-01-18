/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: " #FA541C",
        tertiary: "#212B36",
        accent: "#FFFFFF",
        highligh: "#3A81C1",
        card: "#FDAB76",
        cardd: "#77F0ED",
        carddd: "#FFE475",
        cardddd: "#69F290",
      }
    },
  },
  plugins: [],
}

