const { colors } = require("tailwindcss/defaultTheme");
const { orange } = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF8900",
        secondary: "#2274A5",
        black: "#1B1B1E",
        white: "#FDFFFF",
        orange,
      },
      fontFamily: {
        body: ["PT Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-color": colors.orange,
        },
      };
      addUtilities(extendUnderline);
    },
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
