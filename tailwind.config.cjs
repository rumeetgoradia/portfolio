/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animation-delay"),
  ],
  fontFamily: {
    sans: ['"Manrope"', ...fontFamily.sans],
  },
  theme: {
    animationDelay: {
      "-1500": "-1500ms",
      "-2000": "-2000ms",
      "-3500": "-3500ms",
    },
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
        "50%": { opacity: 0.7 },
      },
      bounce: {
        "10%": {
          transform: "scaleY(0.8)" /* start by scaling to 30% */,
        },
        "30%": {
          transform: "scaleY(1)" /* scale up to 100% */,
        },
        "60%": {
          transform: "scaleY(0.5)" /* scale down to 50% */,
        },
        "80%": {
          transform: "scaleY(0.75)" /* scale up to 75% */,
        },
        "100%": {
          transform: "scaleY(0.6)" /* scale down to 60% */,
        },
      },
      enter: {
        "0%": { opacity: 0, transform: "translateY(-10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
    animation: {
      bounce: "bounce 2s ease infinite alternate",
      pulse: "pulse 1.25s ease infinite alternate",
      enter: "enter 230ms cubic-bezier(.21,1.02,.73,1)",
      exit: "enter 230ms cubic-bezier(.21,1.02,.73,1) reverse",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
