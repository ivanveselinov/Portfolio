import React from 'react'
import AboutMe from './AboutMe'
import PersonIcon from '@mui/icons-material/Person';

function Container() {
    return (
        <div className="bg-gray-100 border">
            <h1 className="text-center text-2xl mt-20"><PersonIcon sx ={{ fontSize: 40 }}/>&nbsp;About Me</h1>
          <AboutMe />
        </div>
    )
}

export default Container
// border-1 bg-gray-900