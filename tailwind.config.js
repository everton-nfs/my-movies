// tailwind.config.js

module.exports = {
  content: [
    "./*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'pink': {
        75: "#ff00787c",
        100: "#ff0078"
      },
      'blue': {
        50: "#555b87",
        75: "#252b56",
        100: "#181c42"
      },
      'transparent': "#ffffff00"
    }
  },
  plugins: [],
}