module.exports = {
  theme: {
    extend: {
      borderRadius: {
        xl: '30px'
      },
      boxShadow: {
        neu: ' -9px -9px 26px #ffffff, 6px 6px 26px #bec3c9',
        neu_in: 'inset -6px -6px 26px 0 #ffffff, inset 6px 6px 20px 0 #bec3c9',
        neu_dr: '5px 5px 10px #bec3c9, -5px -5px 10px #ffffff',
        plain: '0 0 0 0',
        other: '9px 9px 26px 0 #a3b1c6'
      },
      backgroundColor: {
        main: '#e0e5ec',
        darker_main: '#d1d8e3'
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
      },
      height: {
        total: '650px',
        half: '290px',
        terminal: '400px',
        adjust: '280px',
        small: '200px'
      }
    }
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition': {
          transition: 'all 1000ms ease-in-out'
        },
        '.transition-slow': {
          transition: 'all 2000ms ease-in-out'
        },
        '.transition-fast': {
          transition: 'all 500ms ease-in-out'
        },
        '.bg-main-gr': {
          background: 'linear-gradient(145deg, #f0f5fd, #caced4)'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
