/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brick-red': {
          DEFAULT: '#BE3144',
          50: '#EDBAC0',
          100: '#E9A9B2',
          200: '#E18995',
          300: '#D86877',
          400: '#D0485A',
          500: '#BE3144',
          600: '#912534',
          700: '#651A24',
          800: '#380E14',
          900: '#0C0304',
          950: '#000000'
        },
    },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        raleway: ['Raleway', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}