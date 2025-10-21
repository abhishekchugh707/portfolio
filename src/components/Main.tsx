import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

// Import your local image
import myPhoto from '../assets/images/me.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Use the imported image here */}
          <img src={myPhoto} alt="Abhishek Chugh" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/abhishekchugh707" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhishekchugh707/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          <h1>Abhishek Chugh</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/abhishekchugh707" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhishekchugh707/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
