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
    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '5/8': '54vh',
      '3/4': '75vh',
      'full': '100vh',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
