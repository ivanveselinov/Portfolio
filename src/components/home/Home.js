import React from 'react'
import Typing from 'react-typing-animation';


function Home() {
    return (
        <div id="home" className="w-full mt-1 border-2 h-screen bg-home-lg bg-cover bg-center bg-repeat-y bg-fixed flex" >
           <div className=" mt-50 m-auto w-1/2 justify-center h-60 ">
               <div className='sm:text-xl lg:text-5xl text-green-300 font-saira '>
                    <Typing speed={100}>
                        <p className='lg:p-2 font-bold '>Hello!</p> 
                        <p className='sm:ml-1 lg:ml-5 p-2 font-bold text-#617280'>My name is Ivan Veselinov✌️</p> 
                        <p className='sm:ml-1 lg:ml-10 p-2 font-bold '>I am a Full-Stack Web Developer and IT Technician 💻 </p>
                        <p className='sm:ml-1 lg:ml-16 p-2 font-bold text-green-300'>based in Melbourne 🇦🇺</p>
                    <Typing.Speed ms={200} />
                        <p className='ml-5'></p>   
                    </Typing>
                </div>

            </div>
        </div>
    )
      
}

export default Home
