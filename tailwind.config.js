/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple system blue (#0071e3 buttons, #0066cc links)
        brand: {
          50: '#e9f2ff', 100: '#d3e6ff', 200: '#a6ccff', 300: '#6bb0ff',
          400: '#2b90ff', 500: '#0071e3', 600: '#0066cc', 700: '#0058b3',
          800: '#004a94', 900: '#003a75', 950: '#00264d',
        },
        // Apple neutrals
        ink: '#1d1d1f',
        graphite: '#6e6e73',
        mist: '#f5f5f7',
      },
      fontFamily: {
        // Apple's SF system font stack (falls back gracefully off Apple devices)
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"',
          '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
