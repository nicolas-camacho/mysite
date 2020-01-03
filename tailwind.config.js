module.exports = {
  theme: {
    extend: {
      borderRadius: {
        xl: '30px'
      },
      boxShadow: {
        neu: '-6px -6px 26px 0 #ffffff, 6px 6px 26px 0 #a3b1c6',
        neu_in: 'inset -6px -6px 26px 0 #ffffff, inset 6px 6px 26px 0 #a3b1c6',
        plain: '0 0 0 0'
      },
      backgroundColor: theme => ({
        main: '#e0e5ec'
      })
    }
  },
  variants: {},
  plugins: []
}
