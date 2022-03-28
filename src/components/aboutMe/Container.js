import React from 'react'
import AboutMe from './AboutMe'
import PersonIcon from '@mui/icons-material/Person';

function Container() {
    return (
        <div id="about" className="bg-gray-100 border pt-4">
            <h1 className="text-center text-2xl mt-20"><PersonIcon sx ={{ fontSize: 40 }} className='mb-3'/>&nbsp;About Me</h1>
          <AboutMe />
        </div>
    )
}

export default Container
