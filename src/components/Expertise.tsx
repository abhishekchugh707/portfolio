import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faDocker, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "FastAPI",
  "Angular",
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "SQL",
  "Postman"
];

const labelsSecond = [
  "Docker",
  "GitLab CI/CD",
  "Linux",
  "Git",
  "Keycloak",
  "OAuth2",
  "Caddy",
  "Google Cloud"
];

const labelsThird = [
  "MLflow",
  "Hugging Face",
  "Transformers",
  "DSPy",
  "Prompt Engineering",
  "JWT",
  "MLOps"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faAngular} size="3x" />
            <h3>Full-Stack Software Development</h3>
            <p>
              I build scalable backends and interactive frontends using FastAPI, Angular, and PostgreSQL.
              Recent work includes real-time simulators and data-driven web applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & CI/CD Automation</h3>
            <p>
              I implement automated pipelines for testing, integration, and deployment, with containerization,
              secure auth, and TLS for reliable releases.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloudflare } size="3x" />
            <h3>AI Security & MLOps</h3>
            <p>
              I researched and built secure AI workflows evaluating API Key, OAuth 2.0, and JWT for model API access,
              and managing experiments with MLflow.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;