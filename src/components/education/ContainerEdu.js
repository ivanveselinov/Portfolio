import React from 'react'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ArticleIcon from '@mui/icons-material/Article';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function ContainerEdu() {

  const FirstContainer="lg:flex md: block h-22 border-b" 
  const Container=" h-22 shadow-md bg-red-300 mt-5 mb-2 items-center mr-1 ml-1 rounded-xl p-4 m-auto sm:w-full"
  const Main="w-full text-center text-2xl m-auto "
  const ContainerTwo="p-1 flex justijustify-between"
  const Logo="lg: w-16 h-16"
  const Title="lg:text-xl m-auto mt-5 border-b text-center sm: text-xs"
  const Paragraph="lg:text-xl text-center sm: text-sm"
  const iconsTop = "mb-2"
  const iconsPub = "mb-1"
    return (
      <Fade duration={3000}> 
        <div className=" bg-gray-100 pt-4">
        <div className="w-3/4 m-auto">

            
            <div className={Main}>  {/* MAIN CLASS */}
            {/* HistoryEduRoundedIcon */}
            <p className="p-20 w-3/4 m-auto border-b text-3xl"><SchoolRoundedIcon sx ={{ fontSize: 40 }} className={iconsTop}/>&nbsp;Education</p>
            </div>

              {/* General Assembly */}
          <Zoom center duration={3000}>
            <div className={FirstContainer}>  
                <div className={ `${Container} mr-2`}> {/* Container */}
                <div className={ContainerTwo}> { /* ContainerTwo */ }
                   <p className={`${Logo} bg-GA`}> {/* LOGO */}
                   </p> 
                 
                   <p className={Title}>General Assembly Australia
                     </p>
                   
                   </div>
                  
                   <p className={Paragraph}><HistoryEduRoundedIcon sx ={{ fontSize: 40 }} className={iconsPub}/>Software Engineer | Full-stack Web Development </p>
                   <p></p>
                </div>

             

                </div>
              </Zoom>
                
                <div className={FirstContainer}>   {/* MAIN CLASS */}
                
                   {/* FICT MASTER */}    
            <Zoom center duration={3000}>
              <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-fict`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>Faculty of Information and Communication Technologies 
                     </p>
                   </div>
                   
                   <p className={Paragraph}><HistoryEduRoundedIcon sx ={{ fontSize: 40 }} className={iconsPub}/>Master in Computer Science</p>
                   <br></br>
                </div>
              </Zoom>

                  {/* BACHELOR */}
              <Zoom center duration={3000}> 
                <div className={`${Container}`}> {/* Container */}
                <div className={ContainerTwo}> { /* ContainerTwo */ }
                   <p className={`${Logo} bg-tfb`}> {/* LOGO */}
                   </p> 
                  
                   <p className={Title}>Faculty of Technical Sciences 
                     <p>St. Kliment Ohridski University - Bitola </p>
                     </p>
                
                   </div>
                   <p className={Paragraph}><HistoryEduRoundedIcon sx ={{ fontSize: 40 }} className={iconsPub}/>Bachelor of Informatics, Information Technology </p>
                   <p></p>
                 
                </div>
              </Zoom> 
                </div>
           
             
                  {/* PUBLICATIONS !! */}
         
            <div id="publication" className={`${Main} pt-4`}>  {/* MAIN CLASS */}
            <p className=" p-20 w-3/4 m-auto border-b text-3xl"><ArticleIcon sx ={{ fontSize: 40 }} className='mb-3'/>&nbsp;Publications</p> {/* PUBLICATIONS  */}
            </div>
          
     
            <div className={FirstContainer}>

               {/* Can we Fight Social Media!!  */}
              <Zoom center duration={3000}> 
                <div className={Container}> {/* Container */}
                 <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-ICATCES`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>Can we Fight Social Media 
                   <p>with Multimedia Learning Systems? </p>
                     </p>
                   </div>
               
                   <p className={Paragraph}><FindInPageIcon sx ={{ fontSize: 40 }}  className={iconsPub}/>International Conference on Advanced Technologies, Computer Engineering and Science (ICATCES 2019) Alanya, Turkey · Apr 26, 2019</p>
                   <div className="flex justify-between mt-4 ">
                   <p className="text-center text-xl p-2 ">Page: 212   </p>
                   <a href="https://muh.karabuk.edu.tr/bilgisayar/icatces/proceeding_book_2019.pdf" className="text-center text-xl ">More..</a>
                   </div>
               
                
                </div>
              </Zoom>

                  {/* MLS  */}
              <Zoom center duration={3000}> 
                <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-AIIT mb-2`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>Architecture for Multimedia Learning System 
                   <p>With Social Networking Features</p>
                     </p>
                   </div>
                 
                   <p className={Paragraph}><FindInPageIcon sx ={{ fontSize: 40 }} className={iconsPub}/>International Conference on Applied Internet and Information Technologies, 2018 · Oct 5, 2018</p>
                            <br></br>
                   <div className="flex justify-between p-2 ">
                   <p className="text-center text-xl ">Page: 135</p>
                   <a href="https://aiitconference.org/2018/files/Proceedings_AIIT2018.pdf" className="text-center text-xl ">More..</a>
                   </div>
                  
                </div>
              </Zoom>               
              </div>

            </div>
        </div>
      </Fade>
    )
}

export default ContainerEdu
