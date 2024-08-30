/** @type {import('tailwindcss').Config} */
export default {
  content : [ "./index.html" , "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      boxShadow: {
        'pre-xl': '0 16px 64px -4px rgba(22, 8, 30, 0.08)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}