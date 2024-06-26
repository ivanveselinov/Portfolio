import React from 'react'
// import ReadMoreReact from 'read-more-react';
import Fade from 'react-reveal/Fade';

function AboutMe() {

  const Paragraph = "lg:text-xxl sm: text-sm text-left";

    return (
    <Fade duration={3000}>
    <div className="w-3/4 m-auto flex mt-20 mb-40"> 
      <div className=" flex ">
        <div  className="lg:w-1/2 h-22 bg-about bg-cover bg-center xs:hidden">     </div>  {/* IMAGE! */}
          <div className="lg:text-lg p-10 w-1/2  break-words h-22 overflow-hidden max-w-278  bg-blue-200 shadow-lg m-auto focus:outline-none xs: w-full text-sm dark:bg-gray-400">
            
             <p className={Paragraph}>     {/* Put this one in more paragraphs */}
               {/* Text about me !!*/}
           
              <p className="mb-4 mt-4 dark:text-white">
               Since I was about 10 years old my passion and focus has been on anything to do with 
               computers and after ten long years working in various jobs, I decided it was finally
               time to follow my dreams and find a dream job in Information Technology which is what makes
               me happy and which is what  I am really passionate about.
               </p>
               <p className="mb-4 mt-4 dark:text-white">
               After some decisions, I thought
               enrolling in a GA course was the perfect start  and  I was not wrong! I was imparted with so much knowledge and skills
               which added to all the theory I learnt overseas when studying.
               </p>
      
              

               {/* <ReadMoreReact
               readMoreText={"Click here to read more...."}
               min={80}
				       ideal={100}
			         max={200}
               text="After some decisions, I thought
               enrolling in a GA course was the perfect start  and  I was not wrong! I was imparted with so much knowledge and skills
               which added to all the theory I learnt overseas when studying.
           "
               />      */}
              </p>   
          </div>
      </div>
    </div>
    </Fade>
    
    )
}

export default AboutMe

