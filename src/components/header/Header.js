import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Header() {
    const icons = "mb-2";
    return (
        <div className=" z-10 w-screen fixed top-0 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 h-24 justify-between flex pl-10 pr-10 pt-10 sm: text-xs xl:text-base  ">
            <AnchorLink href="#home" className="lg:text-xl hover:text-blue-300 hover:underline "><HomeIcon className={icons}/>Home</AnchorLink>
            <AnchorLink href="#about" className="lg:text-xl hover:text-blue-300 hover:underline  "><PersonIcon className={icons}/> About</AnchorLink>
            <AnchorLink href="#projects" className="lg:text-xl hover:text-blue-300 hover:underline"><CodeIcon className={icons}/>Projects</AnchorLink>
            <AnchorLink href="#tech" className="lg:text-xl hover:text-blue-300 hover:underline"><WorkIcon className={icons}/>Skills</AnchorLink>
            <AnchorLink href="#education" className="lg:text-xl hover:text-blue-300 hover:underline"><SchoolIcon className={icons}/>Education</AnchorLink>
            <AnchorLink href="#publication" className="lg:text-xl hover:text-blue-300 hover:underline"><ArticleIcon className={icons}/>Publications</AnchorLink>
            <AnchorLink href="#contact" className="lg:text-xl hover:text-blue-300 hover:underline"><ContactsIcon className='sm: mb-2 lg:mb-3'/>Contact</AnchorLink>
     </div>

       
    )
}

export default Header
