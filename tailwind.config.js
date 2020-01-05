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
      backgroundColor: {
        main: '#e0e5ec'
      },
      margin: {
        xs: '2px',
        sm: '10px',
        md: '20px',
        lg: '30px',
        xl: '100px'
      },
      fontFamily: {
        firacode: ['Fira Code', 'monospace'],
        major: ['Major Mono Display', 'monospace'],
        prime: ['Courier Prime', 'monospace'],
        tech: ['Share Tech Mono', 'monospace'],
        nova: ['Nova Mono', 'monospace']
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition': {
          transition: 'all 1000ms ease-in-out'
        },
        '.transition-slow': {
          transition: 'all 2000ms ease-in-out'
        },
        '.transition-fast': {
          transition: 'all 500ms ease-in-out'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
