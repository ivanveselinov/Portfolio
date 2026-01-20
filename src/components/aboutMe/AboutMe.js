import React from 'react'
// import ReadMoreReact from 'read-more-react';
import Fade from 'react-reveal/Fade';

function AboutMe() {

  const Paragraph = "lg:text-xxl sm: text-sm text-left";

    return (
    <Fade duration={3000}>
    <div className="w-[75%] m-auto flex mt-20 mb-40"> 
      <div className=" flex">
        <div  className="lg:w-1/3 h-22 bg-about bg-cover bg-center xs:hidden">     </div>  {/* IMAGE! */}
          {/* <div className="lg:text-lg p-10 break-words overflow-scroll h-22 max-w-278  bg-blue-200 shadow-lg m-auto focus:outline-none xs: w-full text-sm dark:bg-gray-400"> */}
          <div className="lg:text-lg p-10 break-words overflow-scroll h-22 max-w-278 bg-blue-200 shadow-lg m-auto focus:outline-none xs: w-full text-sm dark:bg-gray-400">

             <p className={Paragraph}>     {/* Put this one in more paragraphs */}
               {/* Text about me !!*/}
           
              <p className="mb-4 mt-4 dark:text-white">
               I am a Senior <strong>DevOps & Software Engineer</strong> with a long-standing background in computing and system design. 
               Over the years, I have worked across a range of technical roles, building strong expertise in <strong>software engineering, 
               automation, cloud infrastructure, and CI/CD pipelines </strong>, with a focus on delivering scalable and reliable solutions.
              </p>

              <p className="mb-4 mt-4 dark:text-white">
               My technical foundation was established through formal studies overseas, culminating in a <strong>Master of Computer Science</strong>, 
               where I developed a strong understanding of <strong>software architecture, algorithms, and systems engineering</strong>. 
               To further strengthen my practical, industry-ready skills, I completed professional training at <strong>General Assembly</strong>, 
               gaining hands-on experience in <strong>full-stack web development, modern DevOps practices, and production-grade applications</strong>.
              </p>

              <p className="mb-4 mt-4 dark:text-white">
               Today, I operate at a senior level across <strong>DevOps, full-stack development, and test automation</strong>, 
               owning systems end-to-end from development and automated testing to deployment and production support. 
               I specialise in building <strong>efficient, maintainable, and scalable systems</strong>, and 
               I enjoy solving complex technical problems that improve performance, reliability, and developer experience.
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

