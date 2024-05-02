/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "grid-pattern": "url('/img/v1043-081a.png')",
      },
    },
  },
  plugins: [],
};
