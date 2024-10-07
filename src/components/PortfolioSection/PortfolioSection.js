import React from 'react';
import './PortfolioSection.css';
import projects from '../projects';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="language-tag">{project.language}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;