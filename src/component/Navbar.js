import React, { useState } from 'react';
import logo from "../img/Emojione_1F60E.png"; // Update the path to your photo


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', target: '#home' },
    { title: 'About', target: '#About' },
    {title:'Service', target:'#Service'},
    { title: 'Skill', target: '#Skill' },
    { title: 'Gallery', target: '#Gallery' },
    { title: 'Contact', target: '#Contact' }
   
  ];

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (

    <nav className="navbar">
       
      
        <table class="pill-nav" id = "myTopnav">
<tr>  
  <td>         
        {/* Desktop Navigation */}
         
        <a href="#homee" className="nav-logo" onClick={() => handleScroll('#home')}>
          {/* My Portfolio */}
          <img src={logo} className="nav-logo"alt=""style={{textAlign: 'left'}}/> 
          <p className="nav-name">Sisay Tadesse</p>
               </a>
                </td>  
                <td className="nav-links">
        

        <a href="#link">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="nav-item"
              onClick={() => handleScroll(link.target)}
            >
              {link.title}
            </div>
          ))}</a>
        
        </td>
        <td className="mobile-menu-button">
        {/* Mobile Menu Button */}
        <div
          
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          MENU 
                  </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="mobile-nav-item"
                onClick={() => handleScroll(link.target)}
              >
                {link.title}
              </div>
            ))}
          </div>
        )}
</td>
</tr>
</table>
    </nav>
  );
};

export default Navbar;