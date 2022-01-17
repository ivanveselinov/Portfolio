import React from 'react'
import Main from './Main'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Fade from 'react-reveal/Fade';

function Project() {
    return (
      <Fade duration={3000}>
         <div  id="projects" className="bg-gray-100 border-t pt-20">
             <h1 className="text-center text-2xl mt-10 mb-20"><DeveloperModeIcon sx ={{ fontSize: 40 }} className='mb-1'/>&nbsp;Projects</h1>
          <Main />
        </div>
      </Fade>    
    )
}

export default Project
