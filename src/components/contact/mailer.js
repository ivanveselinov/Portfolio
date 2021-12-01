import { TextareaAutosize } from "@material-ui/core"
import { Button, TextField } from "@mui/material"
import emailjs from 'emailjs-com';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import React, { useRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

function Mailer() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        // form.current, 
      emailjs.sendForm('service_p6ijwr6', 'template_m9phko7', e.target, 'user_dtiDwo5fBoO5jlMqZQ827')
        .then((result) => {
            console.log('Your email is send successufuly',result.text);
        }, (error) => {
            console.log(error.text);
        })
    };


    const removeForm = function (e) {
        e.target.value.name =""
        e.target.value.user_name =""
        e.target.value.message =""
    }

    const Fields='lg:w-full mt-10 xm:w-min shadow-md ';

    return (
     
    
    <div className="mt-20 ">
           <p className="text-center text-3xl mt-b mb-20 "><ContactMailIcon sx ={{ fontSize: 40 }}/>&nbsp;Contact</p>


        <div className="lg:w-1/3 m-auto border-b bg-blue-100 rounded-2xl shadow-xl"> 
            <form className="ml-1 mr-1"ref={form} onSubmit={sendEmail} >
                <div className="text-center">
                    <p className="text-2xl"><EmailIcon sx ={{ fontSize: 40 }}/>&nbsp;Send Email</p>
                </div>
             
            <div className={Fields}>      
                 <TextField className="bg-white " fullWidth label="Name" name="name" id="fullWidth " required/>
            </div>

            <div className={Fields}>    
                 <TextField className="bg-white" fullWidth label="Email" name="user_email" id="fullWidth " required/>
            </div>

            <div className={`${Fields} mb-5 mt-5 `}>
                 <TextareaAutosize                          
                          className="p-3 w-full "
                          name="message"
                          minRows={3}
                          aria-label="empty textarea"
                          placeholder="Empty"
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
    );
};
export default Mailer




