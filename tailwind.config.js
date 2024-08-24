import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {

        
        'neutralSilver': '#F5F7FA',
        'neutralDGrey':  '##e9edc9',
        'bandPrimary':   '#29bf12',
        'neutralGrey':   '#717171',
        'gray900':       '#18191F',
      
      },
    },
  },
  plugins: [flowbite.plugin()],
}


/*
colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey':  '#4D4D4D',
        'bandPrimary':   '#4CAF4F',
        'neutralGrey':   '#717171',
        'gray900':       '#18191F',

        second one 

        'neutralSilver': '#F5F7FA',
        'neutralDGrey':  '##e9edc9',
        'bandPrimary':   '#29bf12',
        'neutralGrey':   '#717171',
        'gray900':       '#18191F',
      
      }

*/