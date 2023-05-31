import React from 'react'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { Fade, Zoom } from 'react-reveal'

const WorkExperience = () => {
  
  const FirstContainer="lg:flex md: block h-22 border-b" 
  const Container="h-22 shadow-md bg-blue-200 mt-5 mb-2 items-center mr-1 ml-1 rounded-xl p-4 lg:full md: w-2/3 sm: w-full sm: m-auto"
  const Main="w-full text-center text-2xl m-auto "
  const ContainerTwo="p-1 flex justijustify-between "
  const Logo="bg-teamAssurance bg-no-repeat lg:w-24 lg:h-24 md:w-24 md:h-24"
  const Title="lg:text-3xl m-auto ml-10 border-b md: text-xl sm: text-2xl sm: text-center font-bold"
  const positionTitle="text-center mt-1 w-full h-10 lg:text-xl font-bold md:text-l sm:text-l"
  const since="text-center mt-1 w-full h-10  lg:text-xl font-bold md:text-l sm:text-l"
  const iconsTop = "mb-2"
  
    return (
      <Fade duration={3000}> 
        <div className=" bg-gray-100 pt-4 pb-32">
        <div className="w-3/4 m-auto">

            
            <div className={Main}>  {/* MAIN CLASS */}
         
            <p className="p-20 w-3/4 m-auto border-b text-3xl"><LaptopChromebookIcon sx ={{ fontSize: 40 }} className={iconsTop}/>&nbsp;Work Experience</p>
            </div>
                
                <div className={FirstContainer} >   {/* MAIN CLASS  FIRST CONTAINER CLASS !!*/} 
                
                   {/* TeamAssurance */}    
            <Zoom center duration={3000}>
              <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                  <a href="https://teamassurance.com/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                   <p className={`${Logo} bg-teamAssurance`}></p>   
                  </a>
                  <p className={Title}>TeamAssurance</p>    
                </div>
                <p className={positionTitle}>Position/Title: DevOps Developer</p>
                <p className={since}>January 2021 - February 2023</p>
              </div>
              </Zoom>

                  {/* Dek Technologies */}
                  <Zoom center duration={3000}>
                    <div className={Container}> {/* Container */}
                        <div className={ContainerTwo}>  { /* ContainerTwo */ }
                        <a href="https://www.dektech.com.au/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                          <p className={`${Logo} bg-dekTechnologies`}></p>
                        </a>
                        <p className={Title}>Dek Technologies</p>
                        </div>
                        <p className={positionTitle}>Position/Title: DevOps Engineer</p>
                        <p className={since}>May 2023 - Present </p>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
      </Fade>
    )
}


export default WorkExperience