import React, { useState, useEffect } from 'react'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { Fade, Zoom } from 'react-reveal'

const WorkExperience = () => {

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  useEffect(() => {

    function CurrentWorkPlace(){

      const currentDate = new Date();
      const startDate = new Date('2024-05-30')
      
      let milisecounds = currentDate - startDate
      
      let diffInDays = Math.floor(milisecounds / (1000 * 60 * 60 * 24));
    
      let year = diffInDays / 365
      let months = (diffInDays % 365) / 30;
    
        if (diffInDays < 365){
          setYear(0);
          setMonth(months.toFixed(0));
        } else{

          setYear(year.toFixed(0));
          setMonth(months.toFixed(0));
        }
    }

    CurrentWorkPlace()

  }, [])

  const FirstContainer="lg:flex md: block lg:w-full md: w-3/4 h-22 border-b m-auto" 
  const Main="w-full text-center text-2xl m-auto mt-8"
  const Container="h-22 shadow-md bg-blue-200 mt-5 mb-2 items-center mr-1 ml-1 rounded-xl p-4 w-full sm: w-full sm: m-auto"
  const ContainerTwo="p-1 flex lg:w-2/3 m-auto md: w-2/3 sm: w-full"
  const Logo="bg-no-repeat lg:w-24 lg:h-24 md:w-24 md:h-24 m-auto" //Implement Hidden command here for Logo on sm screen like sm:hidden !!!
  const LogoEndava="bg-no-repeat  bg-center lg:w-[350px] lg:h-[120px] bg-endava md:w-[500px] md:h-[120px]" //Implement Hidden command here for Logo on sm screen like sm:hidden !!!
  const Title="lg:text-3xl m-auto border-b md: text-xl sm: text-2xl font-bold  text-center" //Title and logo need touch up for large screen as future improvement !!!
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

            <Zoom center duration={3000}>
                  <div className={Container}> {/* Container */}
                      < div className={`{ContainerTwo} flex justify-center items-center `}>  { /* ContainerTwo */ }
                        <a href="https://www.endava.com//" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                        <p className={LogoEndava}></p>
                        </a>
                      </div>
                      <div className={`${Title} lg:hidden md:hidden md:flex sm:block xs:block `}>
                        <p className="text-gray-500">Endava</p>
                      </div>
                        <p className={positionTitle}>Position/Title:</p>
                        <p className={`${positionTitle} text-green-700`}>Senior DevOps Engineer</p>
                        <p className={since}>June 2024 - Present</p>
                      {year <= 0 ? ( // Following condition applies if year is less then 0
                        month <= 1 ? (
                          <p className={`${since}, text-green-700`}>{month} month</p>
                        ) : (
                          <p className={`${since}, text-green-700`}>{month} months</p>
                        )
                      ) : (
                        month <= 0 ? ( // if month is 0 for example 1 year 
                          <p className={`${since}, text-green-700`}> 
                            {year} {year <= 1 ? 'year' : 'years'}
                          </p>
                        ) : ( // Else if year is > 1 then years else year same for month
                          <p className={`${since}, text-green-700`}> 
                            {year} {year <= 1 ? 'year' : 'years'} and {month}{' '}
                            {month <= 1 ? 'month' : 'months'}
                          </p>
                        )
                      )}
                    </div>
              </Zoom>  
              </div>
              <div className={FirstContainer} >   {/* MAIN CLASS  FIRST CONTAINER CLASS !!*/} 
        
                {/* Dek Technologies */}
                <Zoom center duration={3000}>
                  <div className={Container}> {/* Container */}
                      <div className={ContainerTwo}>  { /* ContainerTwo */ }
                      <a href="https://www.dektech.com.au/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                        <p className={`${Logo} bg-dekTechnologies`}></p>
                      </a>
                      <div className={`${Title} lg:flex lg:ml-auto md:ml-auto md:flex sm:block `}>
                        <p className="text-blue-900">Dek</p>
                        <p className="text-gray-500">&nbsp;Technologies</p>
                      </div>
                      <p className="bg-dekTechnologies"></p>
                      </div>
                      <p className={positionTitle}>Position/Title: </p>
                      <p className={`${positionTitle} text-green-700`}>DevOps Engineer</p>
                      <p className={since}>May 2023 - June 2024</p>
                      <p className={`${since}, text-red-500`}>1 year and 2 months</p>
                      </div>
                </Zoom>  
                        {/* TeamAssurance */}    
                  <Zoom center duration={3000}>
                    <div className={Container}> {/* Container */}
                      <div className={ContainerTwo}>  { /* ContainerTwo */ }
                        <a href="https://teamassurance.com/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
                        <p className={`${Logo} bg-teamAssurance`}></p>   
                        </a>
                        <div className={` ${Title} lg:ml-auto md:ml-auto flex`}>
                          <p className="text-yellow-500">Team</p>
                        <p className="">&nbsp;Assurance</p>
                      </div>   
                      </div>
                      <p className={positionTitle}>Position/Title:</p>
                      <p className={`${positionTitle} text-green-700`}>DevOps Developer</p>
                      <p className={since}>January 2022 - February 2023</p>
                      <p className={`${since}, text-red-500`}>1 year and 2 months</p>
                    </div>
                  </Zoom>    
                </div>
            </div>
        </div>
      </Fade>
    )
}


export default WorkExperience