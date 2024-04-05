import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via the following methods:</p>

      <ul className="social-links">
        <li>
          <a href="https://github.com/ZachHuff01" target="_blank" rel="noopener noreferrer">
            <img src='GitHub-Logo.png' alt="GitHub" className="social-icon" /> {/* GitHub logo */}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zachary-huff-628688207/" target="_blank" rel="noopener noreferrer">
            <img src='linkedin.jpeg' alt="LinkedIn" className="social-icon"/> {/* LinkedIn logo */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
