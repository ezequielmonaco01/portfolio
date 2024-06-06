/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "chip-color": "#232323",
        "chip-border-color": "#7F7F7F",
      }
    },
  },
  plugins: [],
}

