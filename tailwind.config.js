/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        purple: require('tailwindcss/colors').purple,
      },
    },
  },
  plugins: [],
}

