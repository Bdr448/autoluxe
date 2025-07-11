/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
      },
      boxShadow: {
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
