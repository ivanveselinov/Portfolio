import React from 'react'

function AboutMe() {

    const Paragraph = "lg:text-xxl sm: text-sm text-left"

    return (
    <div className="w-3/4 m-auto flex mt-20  mb-40"> 
      < div className=" flex ">
        <div  className="lg:w-full h-22 bg-about bg-cover bg-center xs:hidden">     </div>  {/* IMAGE! */}
          <div className="lg:text-lg p-10 w-1/2  h-22 overflow-scroll max-w-278  bg-blue-200 shadow-lg m-auto focus:outline-none xs: w-full text-sm ">
            <h1 className="text-start text-2xl ml-8">Hello!</h1>
            <h1 className={` ${Paragraph} p-3 ml-5`}>My name is Ivan Veselinov</h1>
             <p className={Paragraph}>     {/* Put this one in more paragraphs */}
               <p >   {/* Text about me !!*/}
                I am a Full-Stack Web Developer and IT Technician based 
                in Melbourne and have recently graduated from General Assembly  
                where I increased my knowledge and skills 
                in Front and Back end development by undertaking  a 12 week intensive course with GA.
              </p>
              <p className="mb-4 mt-4 ">
               Since I was about 10 years old my passion and focus has been on anything to do with 
               computers and after ten long years working in various jobs, I decided it was finally
               time to follow my dreams and find a dream job in Information Technology which is what makes
               me happy and which I am really passionate about.
              </p>
              <p className="mb-4 mt-4">
               After some decisions, I thought
               enrolling in a GA course was the perfect start  and  I was not wrong! I was imparted with so much knowledge and skills
               which added to all the theory I learnt overseas when studying. 
              </p>
              <p className="mb-4 mt-4">
              I enjoy working with various tech languages such as React and Vue, and I enjoy learning new things 
              and I am always educating and finetuning myself to be the best I can in both new and advanced technology.
              <p className="mb-4 mt-4">
               I am currently available for full time employment (whether local or international) and I would  love to be part
               of a team whose supportive and motivating and strongly encourages lifelong learning. Please do not hesitate to contact me. 
              </p>
              </p>


</p>
          </div>
    </div>
    </div>

    
    )
}

export default AboutMe

