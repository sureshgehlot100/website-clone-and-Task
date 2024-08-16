/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        bgColorChange: {
          '0%, 100%': { background: 'blue' },
          '50%': { background: 'yellow'},
        }
      }
    },
  },
  plugins: [],
}

