import React from 'react'
import Typing from 'react-typing-animation';


function Home() {

    const text="lg:ml-5 sm:ml-1 p-2 font-bold";

    return (
        <div id="home" className="w-full mt-1 border-2 h-screen bg-home-lg bg-cover bg-center bg-repeat-y flex" >
           <div className=" mt-50 m-auto w-3/5 justify-center h-70 ">
               <div className="lg:text-5xl md:text-3xl sm:text-xl xs: text-md text-green-100 font-saira">
                    <Typing speed={50}>
                        <p className="lg:p-2 font-bold lg:mt-10">Hello!</p> 
                        <p className={` ${text} lg:ml-[30px] md:ml-[30px] sm:ml-[10px] xs: ml-[5px]`}>My name is Ivan Veselinov✌️</p> 
                        <p className={`${text} lg:ml-[60px] md:ml-[60px] sm:ml-[30px] xs: ml-[20px]`}>I am a Senior DevOps Engineer,</p>
                        <p className={`${text} lg:ml-[90px] md:ml-[90px] sm:ml-[50px] xs: ml-[30px]`}>Full-Stack Web Developer</p>
                        <p className={`${text} lg:ml-[120px] md:ml-[120px] sm:ml-[70px] xs: ml-[40px]`}>and IT Technician 💻</p>
                        <p className={`${text} lg:ml-[160px] md:ml-[160px] sm:ml-[90px] xs: ml-[50px]`}>based in Melbourne Australia 🌏</p>
                    <Typing.Speed ms={200} />
                        <p className='ml-5'></p>   
                    </Typing>
                </div>
            </div>
        </div>
    )
      
}

{/* <p className={` ${text} lg:ml-5 md:ml-4 sm: ml-3`}>My name is Ivan Veselinov✌️</p> 
<p className={`${text} lg:ml-10 md:ml-10 sm: ml-11 `}>I am a DevOps Engineer, Full-Stack Web Developer </p>
<p className={`${text} lg:ml-16 md:ml-16 sm: ml-20`}>and IT Technician 💻</p>
<p className={`${text} lg:ml-24 md:ml-24 sm: ml-28`}>based in Melbourne 🇦🇺</p> */}

export default Home
