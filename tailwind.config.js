  // tailwind.config.js
  module.exports = {
    // mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: "class", // or 'media' or 'class'
     theme: {
       extend: {
         fontFamily: {
          'saira' : ['Saira Condensed', 'sans-serif']
         },
        fontSize: {
          xxs: ['10px', '14px'],
          xxl: ['22px', '32px'],
        },
        colors: {
          mine : '#fad662'
        },
        backgroundImage: {
          'home-lg': "url('components/img/Home.jpg')",
          'home2-lg': "url('components/img/Home2.jpg')",
          'about': "url('components/img/Ivan1.png')",
          'project0': "url('components/img/tictactoe.png')",
          'project1': "url('components/img/Agency.png')",
          'project2': "url('components/img/Uniquee2.png')",
          'vue': "url('components/img/vue.png')",
          'react': "url('components/img/react.png')",
          'rubyRails': "url('components/img/rubyRails.png')",
          'ruby': "url('components/img/ruby.png')",
          'javascript': "url('components/img/javascript.png')",
          'nodejs': "url('components/img/nodejs.png')",
          'jquery': "url('components/img/jquery.png')",
          'bootstrap': "url('components/img/bootstrap.png')",
          'postgresql': "url('components/img/postgresql.png')",
          'firebase': "url('components/img/firebase.png')",
          'mongodb': "url('components/img/mongodb.png')",
          'tailwind': "url('components/img/tailwind.png')",
          'tfb': "url('components/img/tfb.png')",
          'fict': "url('components/img/fikt1.png')",
          'Inus': "url('components/img/Inus.png')",
          'GA': "url('components/img/GA.png')",
          'AIIT': "url('components/img/AIIT.png')",
          'ICATCES': "url('components/img/ICATCES.png')",
          'mls': "url('components/img/mls.jpeg')",
          'next': "url('components/img/nextjs.png')",
          'redux': "url('components/img/redux.png')",
          'netlify': "url('components/img/netlify.png')",
          'aws': "url('components/img/aws.png')",
          'git': "url('components/img/git.png')",
          'github': "url('components/img/github.png')",
          'bash': "url('components/img/bash.png')",
          'waf': "url('components/img/waf.png')",
          'mysql': "url('components/img/mysql.png')",
          'beckup': "url('components/img/beckup.png')",
          'zap': "url('components/img/zap.png')",
          'docker': "url('components/img/docker.png')",
          'python': "url('components/img/python.jpeg')",
          'jama': "url('components/img/jama.png')",
          'atlassians': "url('components/img/atlassians.png')",
          'sox': "url('components/img/sox.png')",
          'opshub': "url('components/img/opshub.jpeg')",
          'ea': "url('components/img/ea.jpeg')",
          'jenkins': "url('components/img/Jenkins.png')",
          'nexus': "url('components/img/Nexus.png')",
          'openshift': "url('components/img/Openshift.png')",
          'powerBi': "url('components/img/PowerBi.png')",
          'selenium': "url('components/img/Selenium.png')",
          'testautomation': "url('components/img/TestAutomation.png')",
          'memories': "url('components/img/memories.jpeg')",
          'project4': "url('components/img/iceConcrete.png')",
          'teamAssurance': "url('components/img/teamAssurance.jpeg')",
          'dekTechnologies': "url('components/img/dekTechnologies.jpeg')",
          'endava': "url('components/img/endava.png')"
         },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [require("tailwind-scrollbar-hide")],
   }