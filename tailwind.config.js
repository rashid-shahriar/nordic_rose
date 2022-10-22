/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sf_medium: ["sf_medium"],
        sf_regular: ["sf_regular"],
        new_york_exl: ["new_york_exl"],
        new_york_reg: ["new_york_reg"],
      },
      letterSpacing: {
        custom_wide: "0.3rem",
      },
    },
  },
  plugins: [],
};
