/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: { max: "900px" },
        sm: { max: "600px" },
        xm: { max: "400px" },
      },
      keyframes: {
        dropInAndWobble: {
          "0%": { transform: "translateY(0px) rotate(0deg)", opacity: "0" },
          "20%": { transform: "translateY(-15px) rotate(15deg)", opacity: "1" },
          "40%": { transform: "translateY(-15px) rotate(-15deg)" },
          "60%": { transform: "translateY(-15px) rotate(10deg)" },
          "80%": { transform: "translateY(-15px) rotate(-10deg)" },
          "100%": { transform: "translateY(-15px) rotate(0deg) " },
        },
        wobble: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-15deg)" },
          "60%": { transform: "rotate(15deg)" },
          "80%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
            opacity: "0",
          },
          "2%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        marqueeReverse: {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        boxShadow: {
          inner: "inset 0 0 20px rgba(0, 0, 0, 0.3)",
        },
      },
      animation: {
        dropInAndWobble: "dropInAndWobble 2s forwards",
        wobble: "wobble 2s forwards infinite",
        typing: "typing 5s steps(25) infinite",
        blink: "blink 0.7s step-end infinite",
        marquee: "marquee 12s linear infinite",
        marqueeReverse: "marqueeReverse 12s linear infinite",
      },
    },
  },
  plugins: [],
};
