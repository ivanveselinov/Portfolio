import React from 'react'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import ScienceIcon from '@mui/icons-material/Science';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function ContainerEdu() {

  const FirstContainer="lg:flex md: block h-22 border-b" 
  const Container=" h-22 bg-red-300 mt-5 mb-2 items-center mr-1 ml-1 rounded-xl p-4 m-auto sm:w-full"
  const Main="w-full text-center text-2xl m-auto"
  const ContainerTwo="p-1 flex justijustify-between"
  const Logo="lg: w-16 h-16"
  const Title="lg:text-xl m-auto mt-5 border-b text-center sm: text-xs"
  const Paragraph="lg:text-xl text-center sm: text-sm"

    return (
        <div id="education" className=" bg-gray-100">
        <div className="w-3/4 m-auto">
        

            {/* General Assembly */}
            <div className={Main}>  {/* MAIN CLASS */}
            <p className="p-20 w-3/4 m-auto border-b text-3xl"><HistoryEduRoundedIcon sx ={{ fontSize: 40 }}/>&nbsp;Education</p>
            </div>

            <div className={FirstContainer}>  
                <div className={ `${Container} mr-2`}> {/* Container */}
                <div className={ContainerTwo}> { /* ContainerTwo */ }
                   <p className={`${Logo} bg-GA`}> {/* LOGO */}
                   </p> 
                 
                   <p className={Title}>General Assembly Australia
                     </p>
                   
                   </div>
                  
                   <p className={Paragraph}><SchoolRoundedIcon sx ={{ fontSize: 40 }}/>Software Engineer | Full-stack Web Development </p>
                   <p></p>
                </div>

                {/* FICT MASTER */}
                <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-fict`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>Faculty of Information and Communication Technologies 
                     </p>
                   </div>
                   
                   <p className={Paragraph}><SchoolRoundedIcon sx ={{ fontSize: 40 }}/>Master of Information Technology</p>
                   <br></br>
                </div>

                </div>

                  {/* INUS*/}
                <div className={FirstContainer}>   {/* MAIN CLASS */}
                <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-Inus`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>INUS
                   <p>Australia Education and Training </p>
                   </p>       
                   </div>
                   <p className={Paragraph}><SchoolRoundedIcon sx ={{ fontSize: 40 }}/>General English + IELTS Preparation C1</p>
            
                </div>

                  {/* BACHELOR */}
                <div className={`${Container}`}> {/* Container */}
                <div className={ContainerTwo}> { /* ContainerTwo */ }
                   <p className={`${Logo} bg-tfb`}> {/* LOGO */}
                   </p> 
                  
                   <p className={Title}>Faculty of Technical Sciences 
                     <p>St. Kliment Ohridski University - Bitola </p>
                     </p>
                
                   </div>
                   <p className={Paragraph}><SchoolRoundedIcon sx ={{ fontSize: 40 }}/>Bachelor of Informatics, Information Technology </p>
                   <p></p>
                 
                </div>
                </div>

             
                  {/* PUBLICATIONS !! */}

                <div id="publication" className={Main}>  {/* MAIN CLASS */}
            <p className=" p-20 w-3/4 m-auto border-b text-3xl"><ScienceIcon sx ={{ fontSize: 40 }}/>&nbsp;Publications</p> {/* PUBLICATIONS  */}
            </div>

            <div className={FirstContainer}> 
                <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-ICATCES`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>Can we Fight Social Media 
                   <p>with Multimedia Learning Systems? </p>
                     </p>
                   </div>
               
                   <p className={Paragraph}><FindInPageIcon sx ={{ fontSize: 40 }}/>International Conference on Advanced Technologies, Computer Engineering and Science (ICATCES 2019) Alanya, Turkey · Apr 26, 2019</p>
                   <div className="flex justify-between mt-4 ">
                   <p className="text-center text-xl ">Page: 212   </p>
                   <a href="https://muh.karabuk.edu.tr/bilgisayar/icatces/proceeding_book_2019.pdf" className="text-center text-xl ">More..</a>
                   </div>
                
                
                </div>

                <div className={Container}> {/* Container */}
                <div className={ContainerTwo}>  { /* ContainerTwo */ }
                   <p className={`${Logo} bg-AIIT`}> {/* LOGO */}
                   </p> 
                   <p className={Title}>Architecture for Multimedia Learning System 
                   <p>With Social Networking Features</p>
                     </p>
                   </div>
                 
                   <p className={Paragraph}><FindInPageIcon sx ={{ fontSize: 40 }}/>International Conference on Applied Internet and Information Technologies, 2018 · Oct 5, 2018</p>
                            <br></br>
                   <div className="flex justify-between mt-4 ">
                   <p className="text-center text-xl ">Page: 153  </p>
                   <a href="https://aiitconference.org/2018/files/Proceedings_AIIT2018.pdf" className="text-center text-xl ">More..</a>
                   </div>
                  
                </div>
                </div>

            </div>
        </div>
        
    )
}

export default ContainerEdu
