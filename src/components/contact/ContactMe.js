import React from 'react'
import ContactMain from './ContactMain'
import Mailer from './mailer'


function ContactMe() {
    return (
        <div id="contact" className="bg-gray-100 pt-4 dark:bg-gray-900">
            <Mailer/>
            <ContactMain />
            
        </div>
    )
}

export default ContactMe
