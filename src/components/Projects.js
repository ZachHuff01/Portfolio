import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-box">
          <a href="https://zachhuff01.github.io/meet_app/">
            <img src="meet-app.jpg" alt="Meet-App" />
          </a>
          <p className="descriptions">A serverless, progressive web application (PWA) using a test-driven development (TDD) technique. The Meet App uses the Google Calendar API to fetch upcoming events. This project was build using React, Recharts, JavaScript, and more.</p>
        </div>
        <div className="project-box">
          <a href="https://github.com/ZachHuff01/chat-app">
            <img src="Chat-App.jpg" alt="Chat-App" />
          </a>
          <p className="descriptions">A chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images, audios and location. This project was build using React Native, Firebase, GiftedChat, and more.</p>
        </div>
        <div className="project-box">
          <a href='https://github.com/ZachHuff01/pokedex'>
            <img src="Pokedex.jpg" alt="Pokedex" />
          </a>
          <p className="descriptions">A web app to search for Gen 1 pokemon. Built with a pokemon API HTML5, CSS and JavaScript. </p>
        </div>
        <div className="project-box">
          <a href="https://huff-myflix.netlify.app/">
            <img src="Movies-App.jpg" alt="Movies-App" />
          </a>
          <p className="descriptions">React Client-side for an application called myMovie based on its existing server-side code (REST API and database). User can create an user profile and save their favorite movies. This project was build using React, SCSS, JavaScript, and more.</p>
        </div>
        <div className="project-box">
          <a href="https://zachhuff01.github.io/myFlix-Angular-client/">
            <img src="MyFlix.jpg" alt="MyFlix" />
          </a>
          <p className="descriptions">Angular Client-side for an application called myMovie based on its existing server-side code (REST API and database). User can create an user profile and save their favorite movies. This project was build using Angular, TypeScript, SCSS, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

