/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#FBB040",
        "secondary-light": "#f6980d",
        "alternate-light": "#fff",
        "primary-dark": "#000",
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
      boxShadow: {
        xl: "0px 0px 40px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
