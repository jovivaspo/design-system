/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    darkMode: false,
    extend: {
      colors: {
        primary: '#2196f3',
        secondary: '#7f00b2',
      },
    },
  },
  plugins: [],
};
