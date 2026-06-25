/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff', 100: '#d9eaff', 200: '#bcd8ff', 300: '#8ebfff',
          400: '#599aff', 500: '#3375fb', 600: '#1d57f0', 700: '#1643dd',
          800: '#1838b3', 900: '#1a358d', 950: '#142157',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
