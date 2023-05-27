module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js,css}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
          'sanFrancisco': "url('  ../img/sanFrancisco.jpg')",
          'sanFranciscoDesktop': "url('  ../img/sanFranciscoDesktop.jpg')",
          'bali': "url('../img/bali.jpg')",
          'chicago': "url('../img/chicago.jpg')",
          'iceland': "url('../img/iceland.jpg')",
          'LA': "url('../img/la.jpg')",
          'seattle': "url('../img/seattle.jpg')",
          'miami': "url('../img/miami.jpg')",
          'new_york': "url('../img/new_york.jpg')",
          'norway': "url('../img/norway.jpg')",
          'switzerland': "url('../img/switzerland.jpg')",
          'sydney': "url('../img/sydney.jpg')",
          'yosemite': "url('../img/yosemite.jpg')",
          'sanD': "url('../img/')",
      },
      colors:{
        primary:'#5B21B6',
        secondary:'#F9FAFB',
        tertiary: '#111827',
      },
      fontFamily: {
          Roboto: ['Roboto', 'sans-serif']
      },
      textcolor:{
        primary:'#5B21B6',
        secondary:'#F9FAFB',
        tertiary: '#111827'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
