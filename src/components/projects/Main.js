import React from 'react'
import ReadMoreReact from 'read-more-react';
import Zoom from 'react-reveal/Zoom';

function Main() {

    const TextHeader="lg: text-center text-2xl mb-2 "  
    const Text=" lg: show w-full text-lg  h-250 p-10 border-2 bg-blue-200 m-auto mt-1 focus:outline-none overflow-scroll scrollbar-hide rounded-xl mb-2 hidden md:block ";
    const Image="lg: w-400 border-2 m-auto mt-1 bg-project0 bg-cover h-250 bg-center rounded-xl mb-2";
    const List="list-item ml-3 p-0.5 pb-5 ";
 
     return (
      <div className="w-3/4 justify-center flex mt-5 m-auto  ">
      <div className=""> 
      
           {/* Project 3 */}
      <Zoom center duration={3000}>
       <div className=" flex ">
       <a href="https://mls-ivanveselinov.vercel.app/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
       <div className={` ${Image} bg-mls`}></div>        {/* image */}
        </a>
          <div className={Text}> {/* TEXT DIV*/}
            <h1 className={TextHeader}>Multimedia Learning System (MLS)</h1> {/* H1 */}
              <p>
              This Online teaching platform is created to help students and teachers to deploy and download materials covered with subject filter 
              and online realtime chat application to help them to communicate better with their students using social media features.
              </p>
              This Online teaching platform has three diferent types of users for login which are:
              Students, Teachers and Admins.
              <p>
              
             </p>

          
               {/* List items */}
              <p className="mb-4">To make this project successful we used the following Technologies :</p>
              <p  className={` ${ List } mt-1`} >React</p>
              <p  className={ List } >Tailwind</p>
              <p  className={ List } >Google Firebase Database</p>
              <p  className={ List } >Google Firebase Authentication</p>
              <p  className={ List } >NoSql</p>
              <p  className={ List } >MUI MUI Components</p>
              <p  className={ List } >Deployed via Vercel</p>
              <p className="font-bold">Officially launched on 10.12.2021</p>
          </div>
      </div>
    </Zoom>

    
        {/* Project 2 */}
    <Zoom center duration={3000}>
      <div className=" flex">
        <a href="https://uniquee.vercel.app/" target="_blank">  { /* LINK IMAGE TO GITHUB */ }
        <div className={` ${Image} bg-project2`}></div>        {/* image */}
          </a>
          <div className={Text}> {/* TEXT DIV*/}
            <h1 className={TextHeader}>Uniquee
            <p>Inspired by Facebook</p>
            </h1>

              {/* Paragraph */}
              <p>This group project is made for learning purposes.</p>              
            
              <p>This project outlines the full-stack knowledge learnt during these past 8 weeks of class. The project was inspired by Facebook because it is a real time application.
              Uniquee has been created to help people sell their uniquee and rare products with other users online by quick sign up through Facebook, Google or GitHub. </p>

                           {/* List items */}
             <p >To make this project successful we used the following Technologies :</p>
             <p  className={` ${ List } mt-1`} >React</p>
             <p  className={ List } >Tailwind</p>
             <p  className={ List } >Google Firebase Database</p>
             <p  className={ List } >Google Firebase Authentication</p>
             <p  className={ List } >NoSql</p>
             <p  className={ List } >MUI MUI Components</p>
             <p  className={ List } >Deployed via Vercel</p>
            <p className="font-bold">Officially launched on 19.11.2021</p>
             </div>
            </div>
    </Zoom>
        
        {/* Project 1 */}
        <Zoom center duration={3000}>
        <div className=" flex">
        <a href="https://rentalsivan.herokuapp.com/" target="_blank">  { /* LINK IMAGE TO GITHUB */ }
          <div className={` ${Image} bg-project1`}></div>     {/* image */}
        </a>
      <div className={Text}>                           {/* TEXT DIV*/}
            <h1 className={TextHeader}>Real Estate Solution 
            <p>( Western Suburb Agency )</p>
            </h1>

              {/* Paragraph */}
          <p>
          This project is made for learning purposes. 
          <p>This Web Application has been created to help people find their next home easily by helping them to navigate and search for properties and Real estate agents by entering minimal data and information such as postcodes.</p>
          </p>
                                {/* List items */}
          <p>To make this project successful we used the following Technologies :</p>
          <p className={` ${ List } mt-1`}>HTML</p>
          <p className={ List } >CSS</p>
          <p className={ List } >Ruby on Rails</p>
          <p className={ List } >Postgresql</p>
          <p className={ List } >Bootstrap</p>
          <p className={ List } >Cloudinary</p>
          <p className={ List } >Tidio Online Chat solution</p>
          <p className="font-bold">Officially launched on 29.10.2021.</p>
        </div>
      </div>
      </Zoom>

      {/* Project 0 */}
    <Zoom center duration={3000}>
      <div className=" flex ">
       <a href="https://ivanveselinov.github.io/project0/" target="_blank"> {/* LINK IMAGE TO GITHUB */ }
          <div className={Image}></div>     {/* image */}
        </a>
          <div className={Text}> {/* TEXT DIV*/}
            <h1 className={TextHeader}>Tic Tac Toe</h1> {/* H1 */}
              <p>
                This project is made for learning purposes. This game is created for two players where winning is
                impossible unless a major mistake is made by your opponent.
              </p>
              
              <p>
               But if your opponent starts on an edge that is not a corner, you can win
             </p>

             <p>
               There is an exact science on how to win tic tac toe if this is case: Put your first letter in the center.
             </p>
             <p>
               This is an old school game, inspired from our childhood
             </p>
               {/* who want to try some old school games from our childhood.            */}
               {/* List items */}
              <p className="mb-4">To make this project successful we used the following Technologies :</p>
              <p className={List}>HTML</p>
              <p className={List}>CSS</p>
              <p className={List}>JavaScript</p>
              <p className={List}>jQuery</p>
              <p className="font-bold">Officially launched on 07.10.2021</p>
          </div>
      </div>
    </Zoom>
       


    
            
 
      
    </div>
  </div>

)
}

export default Main
