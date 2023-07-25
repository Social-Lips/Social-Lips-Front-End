/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background_dark_blue: "#081A26",
        background_light_blue: "#1A2730",
        button_blue: "#2B75FF",
        font_dark_gray: "#D9D9D9",
        font_light_gray: "#9A9A9A",
        input_box_gray: "#33434E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
