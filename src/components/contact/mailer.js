import { TextareaAutosize } from "@material-ui/core"
import { Button, TextField } from "@mui/material"
import emailjs from 'emailjs-com';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import React, { useRef, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import Zoom from 'react-reveal/Zoom';


function Mailer() {
        //get    set                          onChange
    const[name, setName] = useState('');
    const[user_name, setUser_name] = useState('');
    const[message, setMessage] = useState('');
    
                // onChange name
      const _handlechange = (e) => {
        setName( e.target.value );

        console.log('i am working');
    } 
                // onChange email   
    const _emailChanger = (e) => {
        setUser_name( e.target.value );
        // console.log('E-mail_field setuped');
    } 
                // onChange textarea
    const _messageChanger = (e) => {
        setMessage( e.target.value );
        // console.log('i am working');
    } 

    const form = useRef();
    const sendEmail = (e) => {

      e.preventDefault();
        // form.current
      emailjs.sendForm('service_p6ijwr6', 'template_m9phko7', e.target, 'user_dtiDwo5fBoO5jlMqZQ827')
        .then((result) => {
            console.log('Your email is send successufuly',result.text);
        }, (error) => {
            console.log(error.text);
        })
        setName("");   //when clicked remove text from name
        setUser_name("");  //when clicked remove text from email
        setMessage("");  //when clicked remove text from textarea
    };


    const Fields='lg:w-full mt-10 xm:w-min shadow-md ';

    return (
    <Zoom duration={3000}>
    
    <div className="mt-20 ">
           <p className="text-center text-3xl mt-b mb-20 "><ContactMailIcon sx ={{ fontSize: 40 }} className='mb-3'/>&nbsp;Contact</p>


        <div className="lg:w-1/3 m-auto border-b bg-blue-100 rounded-2xl shadow-xl"> 
        
            <form className="ml-3 mr-3 pt-7 pb-7"ref={form} onSubmit={sendEmail} >
                <div className="text-center">
                    <p className="text-3xl"><EmailIcon sx ={{ fontSize: 40 }} className='mb-3'/>&nbsp; Message me 
                    </p>
                    <p className="text-xl">&</p>
                    <p className="text-xl"> Let's catch up for a coffee</p>
                </div>
             
            <div className={Fields}>      
                 <TextField className="bg-white" fullWidth label="Name" name="name" id="fullWidth " onChange={_handlechange} value={name} required/> { /* User name */ }
           
            </div>

            <div className={Fields}>    
                 <TextField className="bg-white" fullWidth label="Email" name="user_name" id="fullWidth" onChange={_emailChanger} value={user_name} required/> { /* Email adress */ }
            </div>

            <div className={`${Fields} mb-5 mt-5 `}>  { /* Texr Field */ }
                 <TextareaAutosize         
                          onChange={_messageChanger}
                          value={message}                 
                          className="p-3 w-full "
                          name="message"
                          minRows={3}
                          aria-label="empty textarea"
                          placeholder="Hi there!"
                          defaultValue=""
                         required
                          />
            </div>

            <div className="w-1/2 mb-3">
                 <Button variant="outlined" name="removeForm" type="submit" value="Send">Send<SendIcon/></Button>  
             </div>
                 



            </form>
        </div>
    </div>
    </Zoom>
    );
};
export default Mailer




