import React from 'react';

const Home = () => {
  return (
    <div className='intro-container'>
      <div className='intro-box'>
        <div className="content">
          <div className="text">
            <h3>Welcome! I'm ...</h3>
            <h2>Zachary Huff</h2>
            <h2>Full-Stack-Developer</h2>
            <p>
              I've been working in the construction industry for almost 10 years as a welder. 
              I was thinking about making a career change when I stumbled 
              upon Career Foundry's one week trial. I thought this would be a waste of time, considering I have never been in this industry before but in that 
              week trial I found that I have a passion for building something out of nothing. 
              In order to pursue this newfound passion I enrolled in Career Foundry's Full-Stack-Development course. 
              There I learned how to utilize HTML, CSS, and JavaScript along with its frameworks and libraries. 
            </p>
          </div>
          <div className="image">
            <img src='profile.jpg' alt="Profile" className="profile-image" /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
