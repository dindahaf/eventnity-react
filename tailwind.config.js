/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka'],
        rubik: ['Rubik'],
        inter: ['Inter']
      }
    },
    plugins: []
  }
};
