import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* Master Thesis */}
        <div className="project">
          <a
            href="https://docs.google.com/presentation/d/1SS_joQngeih2I-jXuB3F6cLzovWwmnL7/edit?usp=sharing&ouid=104328753756472185577&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="Master thesis thumbnail" width="100%" />
            <h2>Master Thesis – Securing AI Model APIs in MLOps</h2>
          </a>
          <p>
            Investigated security flaws in automated AI workflows by comparing API Key, OAuth 2.0, and JWT under simulated attacks.
            Analyzed security, usability, and performance trade-offs for production-grade MLOps systems.
          </p>
        </div>

        {/* Knowledge Graphs */}
        <div className="project">
          <a
            href="https://docs.google.com/presentation/d/1GuEmc5KrZX7-oXyuN36QsEbvY6QVshQK/edit?usp=sharing&ouid=104328753756472185577&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="Knowledge graphs thumbnail" width="100%" />
            <h2>Knowledge Graphs in Analytical Architectures</h2>
          </a>
          <p>
            Designed and implemented a real-time data pipeline using Apache Kafka, MinIO, and Spark. Utilized Neo4j for graph-based
            analytics and created dashboards, platform utilization insights, and an LLM-powered Q&amp;A system.
          </p>
        </div>

        {/* Reputation & Sentiment */}
        <div className="project">
          <a
            href="https://docs.google.com/presentation/d/1msv7NjubeqsHEEAz1JttXVPLQw4Hkpa1MClFgWDvb0s/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="Reputation and sentiment analysis thumbnail" width="100%" />
            <h2>Reputation & Sentiment Analysis on News Data</h2>
          </a>
          <p>
            Applied transformer-based LLMs for classifying reputation dimensions and sentiment in German news data.
            Enhanced model accuracy through hyperparameter tuning, prompt engineering, quantization, pruning, and DSPy integration.
          </p>
        </div>

        {/* Web Scraping */}
        <div className="project">
          <a
            href="https://github.com/abhishekchugh707/Movie-Rating"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="Web scraping project thumbnail" width="100%" />
            <h2>Web Scraping – Movie Rating Review System</h2>
          </a>
          <p>
            Leveraged Beautiful Soup and Selenium to automate web scraping of movie ratings and reviews.
            Parsed HTML efficiently and used Pandas to structure and analyze extracted data for integration.
          </p>
        </div>

        {/* Parking Lot Management */}
        <div className="project">
          <a
            href="https://github.com/abhishekchugh707/ParkingLotManagementSystem/tree/main/Parking%20Lot%20Management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="Parking lot project thumbnail" width="100%" />
            <h2>Parking Lot Management System</h2>
          </a>
          <p>
            Designed and implemented a Java-based parking lot management system using OOP concepts.
            Modeled vehicles, slots, and levels; employed data structures for efficient occupancy tracking and search.
          </p>
        </div>

        {/* Cricket Game */}
        <div className="project">
          <a
            href="https://github.com/abhishekchugh707/CricketGame-CPP"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="Cricket game thumbnail" width="100%" />
            <h2>Cricket Game Application</h2>
          </a>
          <p>
            Built a C++ program simulating a cricket match with innings management and live score updates.
            Integrated random generation logic for realistic gameplay outcomes such as runs and wickets.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;