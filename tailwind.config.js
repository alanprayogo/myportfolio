/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dblue: "#1e3a8a",
        lblue: "#0ea5e9",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
