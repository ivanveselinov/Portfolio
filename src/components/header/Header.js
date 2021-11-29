import React from 'react'

function Header() {
    return (
        <div className=" w-screen fixed top-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-24 justify-between flex pl-10 pr-10 pt-10 sm: text-sm xl:text-base  ">
            <a href="/home" className="lg:text-xl hover:text-blue-300 hover:underline">Home</a>
            <a href="/aboutme" className="lg:text-xl hover:text-blue-300 hover:underline">About me</a>
            <a href="/" className="lg:text-xl hover:text-blue-300 hover:underline">Projects</a>
            <a href="/" className="lg:text-xl hover:text-blue-300 hover:underline">Experience</a>
            <a href="/" className="lg:text-xl hover:text-blue-300 hover:underline">Contact me</a>
     </div>

       
    )
}

export default Header
