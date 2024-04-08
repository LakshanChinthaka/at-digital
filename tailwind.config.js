/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1200px',
        'xl': '1440px',
      },
      colors: {
        primary:"#6B3CC9",
        Secondary: "#F28D35"
      }
    },

    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  
  },

  plugins: [],
}

