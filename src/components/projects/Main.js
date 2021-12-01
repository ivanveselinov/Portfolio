import React from 'react'

function Main() {

    const TextHeader="lg: text-center text-2xl mb-2 "  
    const Text=" lg: show w-full text-lg  h-250 p-10 border-2 bg-blue-200 m-auto mt-1 focus:outline-none overflow-scroll scrollbar-hide rounded-xl mb-2 hidden md:block ";
    const Image="lg: w-400 border-2 m-auto mt-1 bg-project0 bg-cover h-250 bg-center rounded-xl mb-2";
    const List="list-item ml-3 p-0.5 ";
 
     return (
      <div id="projects" className="w-3/4 justify-center flex mt-5 m-auto ">
      <div className=""> 
      
      <div className=" flex ">
       <a href="https://github.com/ivanveselinov/project0">  { /* LINK IMAGE TO GITHUB */ }
          <div className={Image}></div>     {/* image */}
        </a>
          <div className={Text}> {/* TEXT DIV*/}
            <h1 className={TextHeader}>Tic Tac Toe</h1> {/* H1 */}
             <p>
                This project is made for learning purposes. This game is created for two players who want to try some old school games from our childhood.           
             </p>
            
               {/* List items */}
              <p>To make this project successful we used the following Technologies :</p>
              <p className={List}>HTML</p>
              <p className={List}>CSS</p>
              <p className={List}>JavaScript</p>
              <p className={List}>jQuery</p>
          </div>
      </div>

        <div className=" flex">
        <a href="https://github.com/ivanveselinov/project1">  { /* LINK IMAGE TO GITHUB */ }
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
          <p className={` ${ List } mt-1`} >Virtual Support Chat - This feature includes chat during office house (9am till 6pm) between Guest , Users to Real Estate Agents or Admins. After trade in hours there is an included AutoRobot option that will help and assist you until we come back during office hours next day.</p>
          <p className={ List } >Guest - They can browse the page, without login and signup, they won't be able to change content but they can chat to Real Estate Agents. They have no authority and access to do anything on this Web Application except to browse the Real Estate properties and look at the different Real Estate Agents.</p>
          <p className={ List } >Users - In this category comes a landlord who can easily Sign up and Log in by making an account so they can post, view and update their property. They also can talk via virtual support Chat to Real Estate Agents or Admins.</p>
          <p className={ List } >Premium Users - In this category comes the Real Estate Agents, who are allowed to Add a Property, Remove a Property and have a look into general Users properties and they can appear and act on the virtual support chat like Agents so they can help and support general Users or Premium User. Premium User Login details email: premium@ga.com, password: chicken</p>
          <p className={ List } >Admin User - This user control everything that is happening on the Web Application, they can add, remove, update and insert new Premium Users and general Users. Also unlimited access on virtual support Chat. This user has all the power on this Web Application. Admin User Login details email: I@ga.com, password: chicken</p>
          
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

      <div className=" flex">
      <a href="https://github.com/ivanveselinov/Uniquee">  { /* LINK IMAGE TO GITHUB */ }
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
             <p>To make this project successful we used the following Technologies :</p>
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
            
      <div className=" flex">
      <a href="https://github.com/ivanveselinov/Uniquee">  { /* LINK IMAGE TO GITHUB */ }
        <div className={Image}></div>  {/* image */}     
          </a>
          <div className={Text}> {/* TEXT DIV*/}
            <h1 className={TextHeader}>Tic Tac Toe</h1>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
      </div>
      
    </div>
  </div>

)
}

export default Main
