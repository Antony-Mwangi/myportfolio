import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Replace with your own project screenshots */}
      <img src={project.image} alt={project.title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-tech">
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
