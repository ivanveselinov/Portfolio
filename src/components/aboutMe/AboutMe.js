import React from 'react'

function AboutMe() {
    return (
    <div id="about" className="w-3/4 m-auto flex mt-40  mb-40 "> 
      < div className=" flex ">
        <div  className="lg:w-full h-22 bg-about bg-cover bg-center xs:hidden">     </div>  {/* IMAGE! */}
          <div className="lg:text-lg p-10 w-1/2  h-22 overflow-scroll scrollbar-hide max-w-278  bg-blue-200 p-2 shadow-lg m-auto focus:outline-none xs: w-full text-sm ">
            <h1 className="text-center text-2xl ">Ivan Veselinov</h1>
             <p className="lg:text-xxl sm: text-sm">     {/* Put this one in more paragraphs */}
              
             I am a Web Developer based in Sydney and recently graduated from General Assembly where I learned about both front and back end development. I had wanted to change my carrer for a long time and after a long rough self-learning path and life journery, I finally decided to commit myself in 12 weeks intensive co
             urse at GA. I found my passion for coding and I love the moment that I am so focused that I even forget to eat! while coding. I am currenly available for 
             'full time employment where its open culture and the team motivates each other to learn new things. Please do not hesitate to reach out to me.

</p>
          </div>
    </div>
    </div>

    
    )
}

export default AboutMe

