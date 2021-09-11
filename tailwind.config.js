module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-dark": "#141C3A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
