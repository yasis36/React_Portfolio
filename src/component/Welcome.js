import React, { useState, useEffect } from "react";
import image from "../img/Emojione_1F60E.png"; 

const Messages = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "Data Analysis",
  "Data Management",
  "UI/UX Design",
  "Social Media Management",
  "Video Editing",
];

const Typewriter = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = Messages[messageIndex];

    if (!isDeleting) {
      if (charIndex < currentMessage.length) {
        setTimeout(() => {
          setText(currentMessage.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 500);
      }
    } else {
      if (charIndex > 0) {
        setTimeout(() => {
          setText(currentMessage.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % Messages.length);
      }
    }
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <table className="welcome">
      <tbody>
        <tr>
          <td>
            <img src={image} alt="Profile" className="profile-image" />
          </td>
          <td>
            <h2 className="welcome-to">Welcome to my Portfolio</h2>
            <div className="container"> <h3>Here is my skills contact me</h3>
              <div className="text">{text}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Typewriter;
