/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'sans-serif'],

        'druk-wide': ['Druk Wide', 'sans-serif']
      },
      colors: {
        primary: '#416CFF'
      }
    }
  },
  plugins: []
}
