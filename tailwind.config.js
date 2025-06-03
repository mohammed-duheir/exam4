/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eafc',
          200: '#c7d5f8',
          300: '#9db7f2',
          400: '#7094ea',
          500: '#4a72df',
          600: '#3154d3',
          700: '#2943be',
          800: '#263a9b',
          900: '#233278',
          950: '#182052',
        },
        secondary: {
          50: '#fbf7ed',
          100: '#f7efd6',
          200: '#efdcad',
          300: '#e5c57a',
          400: '#dcae51',
          500: '#d39a36',
          600: '#bc802c',
          700: '#9c6326',
          800: '#804f26',
          900: '#6b4125',
          950: '#3e2213',
        },
        accent: {
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
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};