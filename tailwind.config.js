/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#00ADB5",
        "secondary-dark": "#393E46",
        "background-dark": "#101824",
        "background-light": "#E3FAE1"
      }
    },
  },
  plugins: [],
};
