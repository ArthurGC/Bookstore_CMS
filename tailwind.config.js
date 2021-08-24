module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      mont: ['Montserrat'],
      robo:['Roboto Slab'],
    },
    extend: {
      colors: {
        azure: '#0290ff',
        title: '#121212',
        link: '#4386bf',
        backg: '#fafafa',
        add: '#888888',
        input: '#c4c4c4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
