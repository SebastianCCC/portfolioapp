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
        additional: '#171717',
      },
      fontSize: {
        base: '15px',
        md: '20px',
        lg: '32px',
        xl: '36px',
        '2xl': '48px',
      },
    },
  },
  plugins: [],
}
