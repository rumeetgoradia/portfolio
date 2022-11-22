// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

const brand = {
  50: "rgb(224, 232, 229)", // #e0e8e5
  100: "rgb(179, 197, 191)", // #b3c5bf
  200: "rgb(128, 158, 149)", // #809e95
  300: "rgb(77, 119, 106)", // #4d776a
  400: "rgb(38, 89, 74)", // #26594a
  500: "rgb(0, 60, 42)", // #003c2a
  600: "rgb(0, 54, 37)", // #003625
  700: "rgb(0, 46, 31)", // #002e1f
  800: "rgb(0, 39, 25)", // #002719
  900: "rgb(0, 26, 15)", // #001a0f
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
        sans: ["var(--primary-font)", ...fontFamily.sans],
      },
      transitionTimingFunction: {
        // DEFAULT: "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
