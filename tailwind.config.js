/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          fundo: '#FAF8F5',
          lilac: '#B8A4D4',
          dark: '#7E689F',
          nude: '#E8DDD7',
          text: '#2D2D2D',
          gray: '#D9D4DD'
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'bloom': '20px',
      },
      boxShadow: {
        'bloom': '0 8px 30px rgba(0,0,0,0.06)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      }
    },
  },
  plugins: [],
}
