const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "true-gray": colors.trueGray,
        orange: colors.orange,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        blue: colors.blue,
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      darklg:
        "0 20px 25px -5px rgba(255,255,255,0.75), 0 10px 10px -5px rgba(255,255,255,0.75)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
