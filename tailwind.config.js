/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
              'xs': '.75rem',
              'sm': '.875rem',
              'tiny': '.875rem',
              'base': '1rem',
              'lg': '1.125rem',
              'xl': '1.25rem',
              '2xl': '1.5rem',
              '3xl': '1.875rem',
              '4xl': '2.25rem',
              '5xl': '3rem',
              '5.5xl': '3.5rem',
              '6xl': '4rem',
              '7xl': '5rem',
            },
    fontFamily:{
          Evolventa : ["Evolventa" ,"sans-serif"],
          // Inter: ["Inter"],
          Inter : ["Inter-Regular"]
            },
    extend: {
      
    },
  },
  plugins: [],
}

