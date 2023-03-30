/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        nude: "#f1ede6",
        sky: "#075985",
        frosted: "#768a96",
        cream: "#d6bcae",
        bone:"#f6f5f0",
        darkmoss: "#010d00",
        junglemoss: "#0c2605",
        jungleleaf: "#8ebf24",
        artichoke:"#8f9779",
        orangered: "D952SE",
        skyblue: "2C87BF",
        darkaqua: "194759",
        aqua:"4EB4BF",
        yellow:"F2D479",
        
    },

    fontFamily:{
        'Kanit': ['kanit', 'sans-serif'],
    },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}
