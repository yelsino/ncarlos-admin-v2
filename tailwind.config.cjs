/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        color_green_1: '#FDFFFD',
        color_green_2: '#E8FFEC',
        color_green_3: '#DDFFC8',
        color_green_4: '#C7DCCA',
        color_green_5: '#ADC2B0',
        color_green_6: '#749F7B',
        color_green_7: '#00A91A',
        color_green_8: '#2EE44B',

        color_gray_1: '#494949',
        color_gray_2: '#000000',

        red_primary: '#FF181F',
        alert_primary: '#FF8400',
        success_primary: '#00C851'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
