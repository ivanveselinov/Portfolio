import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';


function Header() {
    const homeMenuBarSelection = "lg:text-xl hover:text-blue-300 hover:underline"
    const icons = "mb-2";
    return (
    <div className=" z-10 w-screen fixed top-0 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 h-24 ">
        <div className="w-full h-20 justify-between flex sm: text-xs xl:text-base xs:text-center text-center sm: p-6 md:p-10 lg:p-10">
            <AnchorLink href="#home" className={homeMenuBarSelection}><HomeIcon className={icons}/>Home</AnchorLink>
            <AnchorLink href="#about" className="lg:text-xl hover:text-blue-300 hover:underline  "><PersonIcon className={icons}/> About</AnchorLink>
            <AnchorLink href="#workExperience" className="lg:text-xl lg:flex md:flex sm:flex xs:block hover:text-blue-300 text-center hover:underline ">
                <div><LaptopChromebookIcon className={`${icons} md:mt-0 lg:mt-1`}/></div>
                <div className="xs:mt-2 sm:mt-2 md:mt-1 lg:mt-0"> Work Experience</div>
            </AnchorLink>
            <AnchorLink href="#projects" className={homeMenuBarSelection}><CodeIcon className={icons}/>Projects</AnchorLink>
            <AnchorLink href="#tech" className={homeMenuBarSelection}><WorkIcon className={icons}/>Skills</AnchorLink>
            <AnchorLink href="#education" className={homeMenuBarSelection}><SchoolIcon className={icons}/>Education</AnchorLink>
            <AnchorLink href="#publication" className={homeMenuBarSelection}><ArticleIcon className={icons}/>Publications</AnchorLink>
            <AnchorLink href="#contact" className={homeMenuBarSelection}><ContactsIcon className='sm: mb-2 lg:mb-2.6'/>Contact</AnchorLink>
        </div>
     </div>

       
    )
}

export default Header
