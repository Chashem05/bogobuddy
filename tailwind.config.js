/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0d2b1e',
          800: '#1b4332',
          700: '#2d6a4f',
          600: '#40916c',
          100: '#e8f5e9',
        },
        lime: '#00e676',
        cream: '#f8f4ee',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
