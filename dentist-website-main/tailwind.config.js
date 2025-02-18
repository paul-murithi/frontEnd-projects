/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure this is correct
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure your JSX/TSX files are being picked up
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
