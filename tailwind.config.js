/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '30': '30px',
        '100': '100px',
      },
      boxShadow: {
        'custom-drop': '30px 30px 5px rgba(0, 0, 0, 0.25)',
        'custom-drop-2': '0px 0px 5px 5px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        customRed: '#A33917',
      },
    },
  },
  plugins: [],
}

