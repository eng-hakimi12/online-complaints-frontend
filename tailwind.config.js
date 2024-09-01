/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        primaryColor: '#1FA2A4',
        secondaryColor: '#F4F4F2',
      },
      fontFamily: {
        primaryFont:"SUSE"
      },
    },
  },
  plugins: [],
}

