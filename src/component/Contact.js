import React from 'react';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contactItems = [
  { icon: faEnvelope, label: 'Email', value: 'sis.tad246@gmail.com' },
  { icon: faPhone, label: 'Phone', value: '+251 919 48 45 84' },
  { icon: faLocationDot, label: 'Location', value: 'Ethiopia' },
];

function Contact() {
  return (
    <div className="content-block contact-block">
      <div className="section-heading reveal-up">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something that feels professional and memorable</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-description reveal-up">
          <p>
            I&apos;m open to freelance projects, collaborations, and creative partnerships where strong
            design and thoughtful development matter.
          </p>

          <div className="contact-details">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-detail-card">
                <FontAwesomeIcon icon={item.icon} />
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form reveal-up-delayed">
          <h3>Send a message</h3>
          <form action="mailto:sis.tad246@gmail.com" method="post" encType="text/plain">
            <div className="field-row">
              <input type="text" id="name" name="name" required placeholder="Your name" />
              <input type="email" id="email" name="email" required placeholder="Your email" />
            </div>
            <textarea id="message" name="message" placeholder="Tell me about your project" required />
            <button type="submit">Start the Conversation</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
