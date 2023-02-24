import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp,  } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
               
                <FontAwesomeIcon icon={ faTwitter } className="icons twitter"/>
                <FontAwesomeIcon icon={ faFacebook } className="icons facebook"/>
                <FontAwesomeIcon icon={ faInstagram} className="icons instagram"/>
                <FontAwesomeIcon icon={ faLinkedin } className="icons linkedin"/>
                <FontAwesomeIcon icon={ faGithub } className="icons github"/>

            </div>
        )
    }
}
export default Footer;