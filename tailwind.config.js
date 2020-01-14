module.exports = {
  theme: {
    extend: {
      borderRadius: {
        xl: '30px'
      },
      boxShadow: {
        neu: '20px 20px 40px #333131, -20px -20px 40px #535151',
        neu_in: 'inset 20px 20px 40px #333131, inset -20px -20px 40px #535151',
        neu_nr: '5px 5px 10px #333131, -5px -5px 10px #535151',
        plain: '0 0 0 0',
        other: '9px 9px 26px 0 #a3b1c6'
      },
      backgroundColor: {
        main: '#434141',
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
