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
    },
  },
  plugins: [],
}
