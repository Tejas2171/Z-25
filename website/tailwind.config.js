/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siteGreen: '#5F8053',
        siteGray: '#303030',
        siteWhite: '#F2F2E6',
      },
    },
  },
  plugins: [],
}