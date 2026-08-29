/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36abf7',
          500: '#0c8ee9',
          600: '#0270c7',
          700: '#0359a1',
          800: '#074c85',
          900: '#0a2540',
          950: '#07182b',
        },
        clinicTeal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        warmWhite: '#FAFCFF',
        softSlate: '#F8FAFC'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 37, 64, 0.05), 0 2px 6px -1px rgba(10, 37, 64, 0.03)',
        'soft-lg': '0 12px 32px -4px rgba(10, 37, 64, 0.08), 0 4px 12px -2px rgba(10, 37, 64, 0.04)',
        'soft-xl': '0 20px 48px -6px rgba(10, 37, 64, 0.12), 0 8px 20px -4px rgba(10, 37, 64, 0.06)',
      }
    },
  },
  plugins: [],
}
