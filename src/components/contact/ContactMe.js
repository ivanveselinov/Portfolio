import React from 'react'
import ContactMain from './ContactMain'
import Mailer from './mailer'


function ContactMe() {
    return (
        <div id="contact" className="bg-gray-100 border pt-4">
            <Mailer/>
            <ContactMain />
            
        </div>
    )
}

export default ContactMe
