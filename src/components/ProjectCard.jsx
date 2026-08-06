// ProjectCard.jsx - Premium Project Card with Glassmorphism
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectCard.css";

function ProjectCard({ project, onExplore }) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category) => {
    const icons = {
      'AI': '🤖',
      'Full Stack': '💻',
      'Web Application': '🌐',
      'E-commerce': '🛒',
      'Dashboard': '📊',
      'SaaS': '☁️'
    };
    return icons[category] || '💻';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Completed': '#34d399',
      'Production Ready': '#60a5fa',
      'Ongoing': '#fbbf24'
    };
    return colors[status] || '#34d399';
  };

  return (
    <motion.div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="card-glow"></div>
      
      <motion.div 
        className="card-image-wrapper"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="card-image" 
        />
        <div className="card-overlay">
          <div className="card-category">
            <span>{getCategoryIcon(project.category)}</span>
            <span>{project.category || 'Full Stack'}</span>
          </div>
          <div 
            className="card-status" 
            style={{ background: getStatusColor(project.status) }}
          >
            {project.status || 'Completed'}
          </div>
        </div>
      </motion.div>

      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>

        <div className="card-tech">
          {project.tech.slice(0, 4).map((tech, i) => (
            <motion.span
              key={i}
              className="card-tech-badge"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 4 && (
            <span className="card-tech-badge more">+{project.tech.length - 4}</span>
          )}
        </div>

        {project.features && project.features.length > 0 && (
          <div className="card-features">
            {project.features.slice(0, 2).map((feature, i) => (
              <span key={i} className="card-feature">
                <span className="feature-dot"></span>
                {feature}
              </span>
            ))}
          </div>
        )}

        <motion.button
          className="card-explore-btn"
          onClick={() => onExplore && onExplore(project)}
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-text">Explore Project</span>
          <span className="btn-arrow">→</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;