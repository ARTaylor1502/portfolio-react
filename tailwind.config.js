/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#FBB040",
      },
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "984px",
        },
      },
      fontFamily: {
        sans: ["Coves Light", "sans-serif"],
      },
      fontSize: "1.8rem",
    },
  },
  plugins: [],
};
