import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Zoom } from 'react-awesome-reveal';


function ContactMain() {
  

  
  return (
    <div className="w-full">
  
      {/* Contact form */}
      <div className="w-screen h-20 bg-blue-100 flex justify-between items-center mt-40">
      <Zoom duration={2000}>
        <a href="https://www.linkedin.com/in/ivanveselinov" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl lg:text-2xl lg:w-1/4 bg-blue-100 items-center text-center p-5">
          LinkedIn <LinkedInIcon sx ={{ fontSize: 40 }} />
        </a>
      </Zoom>
      
      {/* GitHub */}
      <Zoom duration={2000}>
        <a href="https://github.com/ivanveselinov" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl lg:text-2xl lg:w-1/4 bg-blue-100 text-center p-5">
        GitHub <GitHubIcon sx ={{ fontSize: 40 }}  />
        </a>
      </Zoom>

      {/* Resume */}
      <Zoom duration={2000}>
        <a href={process.env.PUBLIC_URL + '/cv/Ivan%20Veselinov%20Resume.pdf'} download="Ivan Veselinov Resume.pdf" className="text-sm md:text-xl lg:text-2xl lg:w-1/4 border bg-blue-100 text-center p-5">
            Resume <HistoryEduIcon sx ={{ fontSize: 40 }}/> 
        </a>
      </Zoom>
          </div>
          </div>
      )
}


export default ContactMain
