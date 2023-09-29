/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "intro-mobile" : "url('/img/bg-intro-mobile.svg')",

      },
      colors: {
        "dark-blue" : 'hsl(233, 26%, 24%)',
        "lime-green" : 'hsl(136, 65%, 51%)',
        "bright-cyan" : 'hsl(192, 70%, 51%)',

        "grayish-blue" : 'hsl(233, 8%, 62%)',
        "light-grayish-blue" : 'hsl(220, 16%, 96%)',
        "very-light-gray" : 'hsl(0, 0%, 98%)',
      },
      boxShadow: {
        "full-shadow" : "100px 100px 0px 300px rgb(242, 242, 242, 0.6)"
      },
      height: {
        "95%" : "95vh"
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}