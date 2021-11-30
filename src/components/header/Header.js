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
    const SmoothScroll = () => (
        <div>
          <AnchorLink href='#/'>Things</AnchorLink>
          <AnchorLink href='#stuff'>Stuff</AnchorLink>
       
          <section id='things'>
            <h2>Things</h2>
          </section>
          <section id='stuff'>
            <h2>Stuff</h2>
          </section>
        </div>
      )
    return (
        <div className=" w-screen fixed top-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-24 justify-between flex pl-10 pr-10 pt-10 sm: text-xs xl:text-base  ">
            <AnchorLink href="#home" className="lg:text-xl hover:text-blue-300 hover:underline"><HomeIcon/>Home</AnchorLink>
            <AnchorLink href="#about" className="lg:text-xl hover:text-blue-300 hover:underline  "><PersonIcon/> About</AnchorLink>
            <AnchorLink href="#projects" className="lg:text-xl hover:text-blue-300 hover:underline"><CodeIcon/>Projects</AnchorLink>
            <AnchorLink href="#tech" className="lg:text-xl hover:text-blue-300 hover:underline"><WorkIcon/>Skills</AnchorLink>
            <AnchorLink href="#education" className="lg:text-xl hover:text-blue-300 hover:underline"><SchoolIcon/>Education</AnchorLink>
            <AnchorLink href="#publication" className="lg:text-xl hover:text-blue-300 hover:underline"><ArticleIcon/>Publications</AnchorLink>
            <AnchorLink href="#contact" className="lg:text-xl hover:text-blue-300 hover:underline"><ContactsIcon/>Contact</AnchorLink>
     </div>

       
    )
}

export default Header
