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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-diagonals": "linear-gradient(154deg, var(--tw-gradient-stops))",
      },
      colors:{
        "custom-blue-dark":"#0D0151",
        "custom-pink":"#710C50",
        "custom-blue":"#092079",
        "custom-yellow":"#FADE7A",
      }
    },
  },
  plugins: [],
};
