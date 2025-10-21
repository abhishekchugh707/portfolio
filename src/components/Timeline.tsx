import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Fraunhofer IAO */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant – Software Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Fraunhofer IAO · Stuttgart, Germany</h4>
            <ul className="tl-list">
              <li>Scalable backends (FastAPI, MLflow, PostgreSQL) & Angular frontends for SolarFrog.</li>
              <li>Built full-stack charging simulator with real-time data processing.</li>
              <li>Implemented CI/CD for ML & simulation workflows.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Avery Dennison Smartrac */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2023 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Working Student – Data Migration</h3>
            <h4 className="vertical-timeline-element-subtitle">Avery Dennison Smartrac · Stuttgart, Germany</h4>
            <ul className="tl-list">
              <li>Supported Global IT (20 ppl) with SQL-based data extraction.</li>
              <li>Resolved migration challenges for Project Fusion.</li>
              <li>Automated resources/data flows for phases 1 & 2.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Schedule Display */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 – Nov 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Working Student – Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Schedule Display · Stuttgart, Germany</h4>
            <ul className="tl-list">
              <li>Full-stack development for 5 websites + Android app (Java, Node.js, React).</li>
              <li>Optimized DB & UX (up to 40% faster load times).</li>
              <li>Testing & bug fixes to reduce user-reported issues.</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;