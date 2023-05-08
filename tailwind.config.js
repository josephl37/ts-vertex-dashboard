/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '42': '10.5rem',
        '144': '36rem'
      }
    },
    colors: {
      'white': '#FFFFFF',
      'gray-1': '#A2A2A6',
      'gray-2': '#323237',
      'gray-3': '#1D1D22',
      'gray-4': '#17151D',
      'tooltip-gray': '#2A2A2F'
    }
  },
  plugins: [],
}

