import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';


function ContactMain() {
  

  
    return (
  <Reveal>
  <div className="w-full ">
 
           {/* Contact form */}
  
    <div className=" w-screen h-20 bg-blue-100 flex justify-between items-center mt-40 ">
    <Zoom duration={2000}>
      <a href="https://www.linkedin.com/in/ivanveselinov" target="_blank" className="lg:w-1/4 bg-blue-100  text-2xl items-center  text-center p-5">
        LinkedIn <LinkedInIcon sx ={{ fontSize: 40 }} />
      </a>
    </Zoom>
          {/* GitHub */}
    <Zoom duration={2000}>
      <a href="https://github.com/ivanveselinov" target="_blank" className="lg:w-1/4 bg-blue-100 text-2xl text-center p-5">
       GitHub <GitHubIcon sx ={{ fontSize: 40 }}  />
      </a>
    </Zoom>
          {/* Resume */}
    <Zoom duration={2000}>
      <a href={process.env.PUBLIC_URL + '/cv/Ivan%20Veselinov%20Resume.pdf'} download="Ivan Veselinov Resume.pdf" className="lg:w-1/4 border bg-blue-100 text-2xl text-center p-5 ">
          Resume <HistoryEduIcon sx ={{ fontSize: 40 }}/> 
      </a>
    </Zoom>
        </div>
        </div>
  </Reveal>   
    )
}


export default ContactMain
