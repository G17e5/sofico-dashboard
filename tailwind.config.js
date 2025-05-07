/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'my-muted-brown': '#a1887f', // Replace with your picked hex code
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

