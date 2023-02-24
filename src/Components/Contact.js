import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <a href="http://localhost:3000/">laurasmith.website</a>

                <div className='btns'>
                    <button><FontAwesomeIcon icon={faEnvelope} className="btn-icon" /> Email</button>
                  
                    <button><FontAwesomeIcon icon={ faLinkedin} className="btn-icon" />LinkedIn</button>
                </div>
            </div>
        )
    }
}
export default Contact;