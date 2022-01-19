const colors = require("tailwindcss/colors");

const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#ff8900",
                },
                gray: colors.neutral,
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

module.exports = config;
