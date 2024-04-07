import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home-section');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const sections = ['home-section', 'about-section', 'projects-section', 'contact-section'];

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollTop + 100) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="NavBar">
      <ul>
        <li>
          <button className={activeSection === 'home-section' ? 'active' : ''} onClick={() => scrollToSection('home-section')}>Home</button>
        </li>
        <li>
          <button className={activeSection === 'about-section' ? 'active' : ''} onClick={() => scrollToSection('about-section')}>About</button>
        </li>
        <li>
          <button className={activeSection === 'projects-section' ? 'active' : ''} onClick={() => scrollToSection('projects-section')}>Projects</button>
        </li>
        <li>
          <button className={activeSection === 'contact-section' ? 'active' : ''} onClick={() => scrollToSection('contact-section')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;




