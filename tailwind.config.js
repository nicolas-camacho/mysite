module.exports = {
  theme: {
    extend: {
      borderRadius: {
        xl: '30px'
      },
      boxShadow: {
        neu: '26px 26px 48px #1a1b1d, -26px -26px 48px #34353b',
        neu_in: 'inset 10px 10px 20px #1a1b1d, inset -10px -10px 20px #34353b',
        neu_nr: '3px 3px 6px #1a1b1d, -3px -3px 6px #34353b',
        plain: '0 0 0 0'
      },
      backgroundColor: {
        main: '#27282C',
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
          background: 'linear-gradient(145deg, #2a2b2f, #232428)'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
