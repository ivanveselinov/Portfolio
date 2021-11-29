import React from 'react'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base';
import { Button } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


function ContactMain() {
    
    return (
  <div className="w-full mt-20 ">
    <div className="lg:w-1/4 m-auto">
      <div className="lg:w-full mt-32 mb-10 xm:w-min">
        <TextField fullWidth label="Name" id="fullWidth " />
      </div>
      <div className="lg:full h-3/4 mb-80 m-auto ">
        <TextField fullWidth label="Email" id="fullWidth" />
      <div className=" lg:text-l w-full mt-5 xs:text-xs ">
        <TextareaAutosize
        minRows={5}
        aria-label="empty textarea"
        placeholder="Empty"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
          style={{ width: 390 }}
        />
      </div>
      <div className="w-1/2 ">
        <Button variant="outlined">Send <SendIcon/></Button>
      </div>
      </div>
      </div>
    <div className="border-t w-screen h-20 flex justify-between items-center ">
      <a href="https://www.linkedin.com/in/ivanveselinov" className="lg:w-1/4 border bg-blue-100  text-2xl items-center  text-center p-5">
        LinkedIn <LinkedInIcon sx ={{ fontSize: 40 }}/>
      </a>
      <a href="https://www.github.com/ivanveselinov" className="lg:w-1/4 border bg-blue-100 text-2xl text-center p-5">
       GitHub <GitHubIcon sx ={{ fontSize: 40 }}  />
      </a>
      <a href="/" className="lg:w-1/4 border bg-blue-100 text-2xl text-center p-5 ">
          Mobile: <PhoneIphoneIcon sx ={{ fontSize: 40 }}/> 
      </a>
   
        </div>
        </div>
    )
}

export default ContactMain
