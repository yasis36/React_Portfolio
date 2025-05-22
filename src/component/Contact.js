import React from "react";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    return (
       <table>
        <div className="contact-container">
            <h2>Contact Me</h2>
            <td>
            <div className="contact-description">
                <p>
                    Thank you for visiting my portfolio! I am always looking for new opportunities to learn and grow as a developer.
                </p>

                <p>
                    If you have any questions or would like to get in touch, please feel free to drop me a message. I will try my best to get back to you as soon as possible.
                </p>
                <p>
                <FontAwesomeIcon icon={faEnvelope}/>  :sis.tad246@gmail.com
                </p>
                <p>
                   <FontAwesomeIcon icon={faPhone}/> +251 919 48 45 84
                    </p>
            </div>
            </td>
            <td>
            <div className="contact-form">
            <h3>Send me a message</h3>
            <p>Fill out the form below to send me a message:</p>
    
            <form action="mailto:sis.tad246@gmail.com" method="post" enctype="text/plain">
                <div className="name">
                    <input type="text" id="name" name="name" required placeholder="Name"/>
               
                    <input type="email" id="email" name="email" placeholder="E-mail" required />
                </div>
                <div>
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>   
            </div>   
            </td>    
        </div>
        
        </table>
    );
}

export default Contact;

