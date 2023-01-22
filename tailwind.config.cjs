/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  fontFamily: {
    sans: ['"Manrope"', ...fontFamily.sans],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgb(255, 250, 250)",
          100: "rgb(225, 220, 221)",
          200: "rgb(195, 191, 192)",
          300: "rgb(166, 162, 164)",
          400: "rgb(138, 135, 137)",
          500: "rgb(111, 109, 110)",
          600: "rgb(85, 83, 85)",
          700: "rgb(60, 59, 61)",
          800: "rgb(37, 36, 38)",
          900: "rgb(14, 14, 16)",
        },
        brand: {
          50: "rgb(0, 162, 124)",
          100: "rgb(0, 123, 94)",
          200: "rgb(0, 111, 85)",
          300: "rgb(0, 98, 75)",
          400: "rgb(0, 86, 66)",
          500: "rgb(0, 74, 56)",
          600: "rgb(0, 62, 47)",
          700: "rgb(0, 49, 38)",
          800: "rgb(0, 37, 28)",
          900: "rgb(0, 25, 19)",
        },
        red: {
          50: "rgb(239, 93, 114)",
          100: "rgb(237, 69, 94)",
          200: "rgb(234, 46, 74)",
          300: "rgb(232, 23, 54)",
          400: "rgb(209, 21, 49)",
          500: "rgb(186, 18, 43)",
          600: "rgb(162, 16, 38)",
          700: "rgb(139, 14, 32)",
          800: "rgb(116, 12, 27)",
          900: "rgb(93, 9, 22)",
        },
        primary: "rgb(var(--primary) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        ghost: "rgb(var(--ghost) / <alpha-value>)",
        "ghost-hover": "rgb(var(--ghost-hover) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
      },
    },
    keyframes: {
      pulse: {
        //   "0%, 100%": { opacity: 0.8, background: "var(--bg-gray-100)" },
        "50%": { opacity: 0.8 },
      },
    },
  },
};
