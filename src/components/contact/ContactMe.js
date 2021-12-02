import React from 'react'
import ContactMain from './ContactMain'
import Mailer from './mailer'


function ContactMe() {
    return (
        <div className="bg-gray-100 border ">
            <Mailer/>
            <ContactMain />
            
        </div>
    )
}

export default ContactMe
