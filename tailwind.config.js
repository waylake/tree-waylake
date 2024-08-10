/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        sakura: {
          light: "#FFB7C5",
          dark: "#FF85A2",
        },
      },
    },
  },
  plugins: [],
};
