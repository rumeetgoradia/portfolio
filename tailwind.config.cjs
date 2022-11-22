// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

const brand = {
  50: "rgb(80, 200, 120)",
  100: "rgb(67, 183, 112)",
  200: "rgb(55, 167, 104)",
  300: "rgb(44, 151, 96)",
  400: "rgb(34, 135, 87)",
  500: "rgb(24, 119, 79)",
  600: "rgb(15, 104, 70)",
  700: "rgb(7, 89, 61)",
  800: "rgb(2, 74, 51)",
  900: "rgb(0, 60, 42)",
};

const error = {
  50: "rgb(250, 225, 225)",
  100: "rgb(236, 201, 201)",
  200: "rgb(222, 177, 177)",
  300: "rgb(207, 153, 154)",
  400: "rgb(192, 130, 131)",
  500: "rgb(176, 107, 109)",
  600: "rgb(160, 84, 88)",
  700: "rgb(144, 61, 68)",
  800: "rgb(127, 37, 48)",
  900: "rgb(110, 3, 30)",
};

const black = "rgb(17, 24, 32)"; // #111820
const white = "rgb(246, 246, 246)"; // #F6F6F6
const gray = {
  50: "rgb(246, 246, 246)",
  100: "rgb(217, 218, 219)",
  200: "rgb(189, 191, 193)",
  300: "rgb(161, 164, 168)",
  400: "rgb(135, 138, 143)",
  500: "rgb(109, 113, 119)",
  600: "rgb(84, 89, 95)",
  700: "rgb(60, 66, 73)",
  800: "rgb(38, 44, 52)",
  900: "rgb(17, 24, 32)",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand,
        error,
        gray,
        black,
        white,
      },
      fontFamily: {
        sans: ["Libre Franklin", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
