/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      screens: {
        md: { max: "900px" },
        sm: { max: "600px" },
        xm: { max: "400px" },
      },
    },
  },
  plugins: [],
};
