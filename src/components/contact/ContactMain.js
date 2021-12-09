import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';


function ContactMain() {
  

  
    return (
  <div className="w-full ">
 
           {/* Contact form */}
    <div className=" w-screen h-20 bg-blue-100 flex justify-between items-center mt-40 ">
      <a href="https://www.linkedin.com/in/ivanveselinov" className="lg:w-1/4 bg-blue-100  text-2xl items-center  text-center p-5">
        LinkedIn <LinkedInIcon sx ={{ fontSize: 40 }}/>
      </a>
      <a href="https://github.com/ivanveselinov" className="lg:w-1/4 bg-blue-100 text-2xl text-center p-5">
       GitHub <GitHubIcon sx ={{ fontSize: 40 }}  />
      </a>
      <a href={process.env.PUBLIC_URL + '/cv/Ivan%20Veselinov%20Resume.pdf'} download="Ivan Veselinov Resume.pdf" className="lg:w-1/4 border bg-blue-100 text-2xl text-center p-5 ">
          Resume <HistoryEduIcon sx ={{ fontSize: 40 }}/> 
      </a>
  
        </div>
        </div>
    )
}

export default ContactMain
