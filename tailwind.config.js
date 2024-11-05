/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2196F3',
        green: '#8BC34A',
      },
    },
    variants: { extend: { textColor: ['hover'], }, },
  },
  plugins: [],
}

