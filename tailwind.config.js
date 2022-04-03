module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      darkMode: 'class',
      fontFamily: {
        'Nunito': ['Nunito','sans-serif']
      },
      colors: {
        'secondary': '#87A5A6',
        'secondary2': '#BF5840',
        'secondary3': '#F8F2ED',
        'teal': '#14b8a6',
        'color_custom1': '#FF5959', 
        'color_custom2': '#676FA3', 
        'color_custom3': '#CDDEFF', 
        'color_custom4': '#DB6B97', 
        'color_custom5': '#20ABB5', 
        'color_custom6': '#F2FFE9', 
        'color_custom7': '#557C55', 
        'color_custom8': '#146356', 
        'color_custom9': '#30475E', 
        'color_custom10': '#121212', 
        'color_custom11': '#C84B31', 
        'color_custom12': '#F2789F', 
        'color_custom13': '#97BFB4', 
        'color_custom14': '#4C0070', 
        'color_custom15': '#B42DC9', 
      },
      zIndex: {
        '-20': '-20',
        '45': '45',
      },
      height: {
        '86%': '86%',
        '83%': '83%',
        '68%': '68%',
        '77%': '77%',
        '66%': '66%',
      },
      widht: {
        '98%': '98%',
      },
    },
    
    screens: {
      'xsm': {'max': '383px'},
      'smx': {'max': '530px'},

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': {'max': '767px'},
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
