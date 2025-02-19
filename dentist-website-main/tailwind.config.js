/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stroke: "#C2D1FF",
        titleBlue: "#3366FF",
        buttonBG: "#3366FF",
        buttonBGHover: "#2858D1",
        linkHover: "#3366FF",
        navBG: "#C7F0FD",
        heading: "#142349",
        text: "#142349",
        textLight: "#142349",
        background: "#EFF6FF",
        subheading: "#FF9140",
        buttonText: "#FFFFFF",
        border: "#A5B8FF",
        buttonTextHover: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
