/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdf8f0',
          100: '#f9eed9',
          200: '#f0d9ad',
          300: '#e3bd75',
          400: '#d49f4a',
          500: '#c2822f',
          600: '#a36524',
          700: '#824d21',
          800: '#6b4020',
          900: '#5a361f',
        },
        nile: {
          50: '#eef9f9',
          100: '#d4eeee',
          200: '#aedede',
          300: '#7bc6c7',
          400: '#4ba6a8',
          500: '#33888c',
          600: '#296d72',
          700: '#25585d',
          800: '#23484d',
          900: '#1f3d42',
        },
        terracotta: {
          400: '#e08a5c',
          500: '#d16e3e',
          600: '#b75530',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}