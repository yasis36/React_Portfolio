import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from "../img/Emojione_1F60E.png"; // Update the path to your photo


const Footer = () => {
    return (
        
        <footer className="footer">

        <table className="footers" border={0} cellPadding={0} cellSpacing={0} width="100%"style={{textAlign: 'bottom'}}>
            <tr>
            <td>
                        {/* <h5 className="footer-text"><span>
                            <img src={logo} className="footer-logo" alt="" />
                            </span></h5> */}
                        <p>
                           I am dedicated to providing the best services to customers.
                        </p>
            </td>
            <td>
                    
                <div className="footer-bottom" >
                    <p>&copy; Sisay 2025 . All rights reserved.</p>
                </div>
            </td>
            </tr>
            
        </table>
            <div className="contact-socials">
            {/* <h3>Follow me</h3> */}
            <a href="https://www.linkedin.com" className="soc-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.facebook.com"className="soc-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com"className="soc-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.twitter.com"className="soc-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.youtube.com"className="soc-icon"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        </footer>

    );
};

export default Footer;