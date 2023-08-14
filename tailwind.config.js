/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      screens: {
        "3xl": "1800px",
<<<<<<< HEAD
=======
        tmd: "550px",
>>>>>>> eb34d760def641fc382778d39f7df55d50237daa
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-diagonals":
          "linear-gradient(154deg, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-blue-dark": "#0D0151",
        "custom-pink": "#710C50",
        "custom-blue": "#092079",
        "custom-yellow": "#FADE7A",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 0.5s ease-in-out",
      },
<<<<<<< HEAD
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 0.5s ease-in-out",
      },
      colors: {
        "custom-blue-dark": "#0D0151",
        "custom-pink": "#710C50",
        "custom-blue": "#092079",
        "custom-yellow": "#FADE7A",
      },
=======
>>>>>>> eb34d760def641fc382778d39f7df55d50237daa
    },
  },
  plugins: [],
};
