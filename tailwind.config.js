const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#FF8900",
        black: "#1B1B1E",
        white: "#FDFFFF",
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
