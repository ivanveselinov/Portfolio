  // tailwind.config.js
  module.exports = {
    // mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        fontSize: {
          xxl: ['22px', '32px'],
        },
        backgroundImage: {
          'home-lg': "url('components/img/Home.jpg')",
          'about': "url('components/img/Ivan1.png')",
          'project0': "url('components/img/tictactoe.png')",
          'project1': "url('components/img/Agency.png')",
          'project2': "url('components/img/Agency.png')",
         },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [require("tailwind-scrollbar-hide")],
    
   
   }