const { colors } = require("tailwindcss/defaultTheme");
const { orange, trueGray } = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#E36920",
        secondary: "#E67734",
        light: "#E8D4C0",
        dark: "#21252B",
        orange,
        gray: trueGray,
      },
      backgroundImage: theme => ({
        "hero-image": "url('/images/me.png')",
      }),
    },
    fontFamily: {
      body: ["Poppins"],
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
          "text-decoration-color": "#E36920",
        },
      };
      addUtilities(extendUnderline);
    },
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
