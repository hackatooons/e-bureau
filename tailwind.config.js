module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fadedBlue: '#E2E8F0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
