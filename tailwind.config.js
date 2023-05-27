/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.25rem",
          sm: "0.5rem",
          lg: "3rem",
          xl: "0.5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        xxs: "450px",
        // => @media (min-width: 550px) { ... }

        xs: "550px",
        // => @media (min-width: 550px) { ... }

        sm: "650px",
        // => @media (min-width: 650px) { ... }
      },
    },
  },
  plugins: [],
};
