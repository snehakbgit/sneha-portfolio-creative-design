/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'cursive': ['"Dancing Script"', 'cursive'],
        'body': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'blush': '#f9e8e8',
        'rose': '#e8a0b0',
        'lavender': '#c9b8e8',
        'cream': '#fdf6f0',
        'dark': '#2d2d2d',
        'pink-soft': '#f4b8c8',
        'purple-soft': '#b8a4d4',
      }
    },
  },
  plugins: [],
}
