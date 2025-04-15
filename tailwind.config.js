/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // you can customize theme here
        colors: {
          tinderRed: '#FF5864',
          tinderPurple: '#9147FF',
        },
      },
    },
    plugins: [],
  }
  