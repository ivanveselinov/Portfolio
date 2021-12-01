import React from 'react'
import Main from './Main'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

function Project() {
    return (

         <div className="bg-gray-100 border-t">
             <h1 className="text-center text-2xl mt-10 mb-10"><DeveloperModeIcon sx ={{ fontSize: 40 }}/>&nbsp;Projects</h1>
          <Main />
        </div>
         
    )
}

export default Project
