module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: '#DA0037',
        secondary: '#EDEDED',
        tertiary: '#434040',
        sec_tertiary: '#222121',
        additional: '#171717',
        sec_addition: '#b5b5b5',
        projectview_dark: '#1B1B1B',
        projectview: '#FBFBFB',
      },
      fontSize: {
        base: '15px',
        md: '20px',
        lg: '32px',
        xl: '36px',
        '2xl': '44px',
        '3xl': '55px',
      },
      screens: {
        pc: '1440px',
      },
    },
  },
  plugins: [],
}
