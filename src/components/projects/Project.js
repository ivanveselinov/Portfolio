import React from 'react'
import Main from './Main'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

function Project() {
    return (

         <div  id="projects" className="bg-gray-100 border-t pt-20">
             <h1 className="text-center text-2xl mt-10 mb-20"><DeveloperModeIcon sx ={{ fontSize: 40 }} className='mb-1'/>&nbsp;Projects</h1>
          <Main />
        </div>
         
    )
}

export default Project
