/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xl: '1440px',
      sm: '980px',
      imgScreem: '1120px',
      xs: '725px'    
    },
    extend: {
      colors: {
        'mainBgc': '#EFF0F5',
        'cardBgc': '#f5f5f5',
        'darkBlue': '#3A4562',
        'lineColor': 'rgba(58, 69, 98, 0.13)',
        'btnBlue': '#384564',
        'opacityBlue': 'rgba(56, 65, 93, 0.82)',
        'blueCardColor': 'rgba(161, 177, 219, 0.317343)',
        'yellowCardColor': 'rgba(255, 207, 0, 0.15)'
      },
      
    },
  },
  plugins: [],
}
