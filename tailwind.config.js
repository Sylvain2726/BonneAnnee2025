/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: '#ff6347',
      }, 
      boxShadow: {
        'md-blue': '0 10px 10px 2px rgba(29, 161, 242, 1)', // ombre bleue
        'xl-red': '0 10px 15px -3px rgba(255, 99, 71, 0.7)', // ombre rouge
      },
    },
  },
  plugins: [],
}

