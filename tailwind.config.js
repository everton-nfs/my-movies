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
        50: "#ff00787c",
        75: "#880f5d",
        100: "#ff0078"
      },
      'blue': {
        50: "#555b87",
        75: "#252b56",
        100: "#181c42"
      },
      'white': "#ffffff",
      'black': {
        50: "#00000090",
        75: "#0000004a",
        100: "#000000"
      },
      'yellow': {
        100: "#ebbf2a",
      },
      'transparent': "#ffffff00"
    }
  },
  plugins: [],
}
