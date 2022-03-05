module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        bitter: ['Bitter','serif'],
        Montserrat:['Montserrat','san-serif'],
        space:['Space Mono', 'monospace']
      }
    },
    screens:{
      'sm' : '425px',
      'lg' : '1024px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
