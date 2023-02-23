import React from 'react';


class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <a href="#">laurasmith.website</a>

                <div className='btns'>
                    <button>Email</button>
                    <button>LinkedIn</button>
                </div>
            </div>
        )
    }
}
export default Contact;