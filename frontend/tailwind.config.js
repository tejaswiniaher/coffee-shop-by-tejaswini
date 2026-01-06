/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      },
      colors: {
        primary: "#5A3825",   // espresso
        secondary: "#C7A17A", // latte
        accent: "#B87333",    // caramel
        dark: "#2B1B12",      // dark roast
        light: "#F6EFE9",     // milk foam
      },
    },
  },
  plugins: [],
};
