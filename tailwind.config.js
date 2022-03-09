module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  media: false,
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
