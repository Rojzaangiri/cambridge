/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006838',
          light: '#008847',
          dark: '#004425',
        },
        secondary: {
          DEFAULT: '#FF6B35',
          light: '#FF8659',
          dark: '#E54E1B',
        },
        accent: {
          DEFAULT: '#4AA5FF',
          light: '#7DBEFF',
          dark: '#2288FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
};