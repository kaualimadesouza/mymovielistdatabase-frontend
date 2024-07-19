/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': "linear-gradient(180deg, #02161F 0%, #011119 30%, #010C11 100%)",
      }),
      fontFamily: {
        serif: 'Pridi'
      },
      gridTemplateColumns: {
        main: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        large: '1fr 1fr 1fr 1fr 1fr 1fr',
        top100: '2.9fr 1fr',
      },
      boxShadow : {
        shape : '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)'
      },
    },
  },
  plugins: [],
}