/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx}"],
  // important: true,
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {},
    },
    colors: {
      dark: "#131118",
      white: "#fff",
    },
  },
  plugins: [],
};
