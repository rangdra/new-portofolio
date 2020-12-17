const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "true-gray": colors.trueGray,
        "light-blue": colors.lightBlue,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
