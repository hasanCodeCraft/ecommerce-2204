/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans']
      },
      fontSize: {
        '25': '25px',
        '39': '39px',
        '49': '49px',
      },
      colors: {
        'primary': '#262626',
        'secondary': '#6D6D6D',
        'gray': '#767676',
      },
    },
  },
  plugins: [],
}

