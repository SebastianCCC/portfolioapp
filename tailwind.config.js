module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: '#E23E67',
        secondary: '#88304E',
        tertiary: '#311D3F',
        additional: '#522546',
        black: '#000200',
        transp: '#000000a7',
      },
    },
  },
  plugins: [],
}
