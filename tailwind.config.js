/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "1xl": "1440px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        gray: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
