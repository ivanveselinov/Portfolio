import React from 'react'
import Typing from 'react-typing-animation';


function Home() {

    const text="lg:ml-5 sm:ml-1 p-2 font-bold";

    return (
        <div id="home" className="w-full mt-1 border-2 h-screen bg-home-lg bg-cover bg-center bg-repeat-y bg-fixed flex" >
           <div className=" mt-50 m-auto w-1/2 justify-center h-60 ">
               <div className="lg:text-4xl md:text-3xl sm: text-2xl text-green-300 font-saira">
                    <Typing speed={100}>
                        <p className="lg:p-2 font-bold">Hello!</p> 
                        <p className={` ${text} lg:ml-5 md:ml-4 sm: ml-3`}>My name is Ivan Veselinov✌️</p> 
                        <p className={`${text} lg:ml-10 md:ml-10 sm: ml-11 `}>I am a DevOps Engineer, Full-Stack Web Developer </p>
                        <p className={`${text} lg:ml-16 md:ml-16 sm: ml-20`}>and IT Technician 💻</p>
                        <p className={`${text} lg:ml-24 md:ml-24 sm: ml-28`}>based in Melbourne 🇦🇺</p>
                    <Typing.Speed ms={200} />
                        <p className='ml-5'></p>   
                    </Typing>
                </div>

            </div>
        </div>
    )
      
}

export default Home
