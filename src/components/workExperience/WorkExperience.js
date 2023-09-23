import React from 'react'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { Fade, Zoom } from 'react-reveal'

// I have installed dateTime plugin !!!!
let date = Date()

console.log(`I am your date and I am working !!!! ${date}`)

const WorkExperience = () => {
  
  const FirstContainer="lg:flex md: block lg:w-full md: w-3/4 h-22 border-b m-auto" 
  const Container="h-22 shadow-md bg-blue-200 mt-5 mb-2 items-center mr-1 ml-1 rounded-xl p-4 w-full sm: w-full sm: m-auto"
  const Main="w-full text-center text-2xl m-auto mt-8"
  const ContainerTwo="p-1 flex justijustify-between lg:w-4/5 m-auto md: w-3/4 sm: w-full"
  const Logo="bg-no-repeat lg:w-24 lg:h-24 md:w-24 md:h-24 m-auto" //Implement Hidden command here for Logo on sm screen like sm:hidden !!!
  const Title="lg:text-3xl m-auto border-b md: text-xl sm: text-2xl font-bold m-auto text-center" //Title and logo need touch up for large screen as future improvement !!!
  const positionTitle="text-center mt-1 w-full lg:h-10 lg:text-xl font-bold md:text-l sm:text-l sm: h-full"
  const since="text-center mt-1 w-full h-10  lg:text-xl font-bold md:text-l sm:text-l"
  const iconsTop = "mb-2"
  const workExperienceTitleMainContainer = "w-full m-auto h-40 flex"
  const workExperienceTitleSecondContainer = "m-auto w-1/4 lg:flex md:flex md:w-auto sm: block sm: w-3/4"
  const workExperienceTitleIconContainer = "w-12 h-12 m-auto" 
  const workExperienceTitleContainer = "w-full h-12 mt-2 text-2xl"

    return (
      <Fade duration={3000}> 
        <div className=" bg-gray-100 pt-4 pb-32">
        <div className="w-3/4 m-auto">

            
            <div className={Main}>  {/* MAIN CLASS */}
         
            <div className={workExperienceTitleMainContainer}> {/* workExperienceTitleMainContainer */}
              <div className={workExperienceTitleSecondContainer}> {/* workExperienceTitleSecondContainer */}
                <div className={workExperienceTitleIconContainer}> {/* workExperienceTitleIconContainer */}
                  <LaptopChromebookIcon sx ={{ fontSize: 40 }} className={iconsTop}/>
                </div>
                <div className={workExperienceTitleContainer}>&nbsp;Work Experience</div> {/* workExperienceTitleContainer */}
              </div>
            </div>
            
            </div>
                
              <div className={FirstContainer} >   {/* MAIN CLASS  FIRST CONTAINER CLASS !!*/} 
        
                {/* Dek Technologies */}
                <Zoom center duration={3000}>
                  <div className={Container}> {/* Container */}
                      <div className={ContainerTwo}>  { /* ContainerTwo */ }
                      <a href="https://www.dektech.com.au/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                        <p className={`${Logo} bg-dekTechnologies`}></p>
                      </a>
                      <div className={`${Title} lg:flex lg:ml-10 md:ml-auto md:flex sm:block `}>
                        <p className="text-blue-900">Dek</p>
                        <p className="text-gray-500">&nbsp;Technologies</p>
                      </div>
                      <p className="bg-dekTechnologies"></p>
                      </div>
                      <p className={positionTitle}>Position/Title: DevOps Engineer</p>
                      <p className={since}>May 2023 - Present </p>
                      </div>
                </Zoom>  
                        {/* TeamAssurance */}    
                  <Zoom center duration={3000}>
                    <div className={Container}> {/* Container */}
                      <div className={ContainerTwo}>  { /* ContainerTwo */ }
                        <a href="https://teamassurance.com/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                        <p className={`${Logo} bg-teamAssurance`}></p>   
                        </a>
                        <div className={` ${Title} lg:ml-12 md:ml-auto flex`}>
                          <p className="text-yellow-500">Team</p>
                        <p className="">&nbsp;Assurance</p>
                      </div>   
                      </div>
                      <p className={positionTitle}>Position/Title: DevOps Developer</p>
                      <p className={since}>January 2022 - February 2023</p>
                    </div>
                  </Zoom>    
                </div>
            </div>
        </div>
      </Fade>
    )
}


export default WorkExperience