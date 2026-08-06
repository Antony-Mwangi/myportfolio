  // Projects.jsx - Complete Premium Projects Section
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCloud,
  FaCode,
  FaChartLine,
  FaRobot,
  FaShoppingCart,
  FaServer,
  FaStar,
  FaTimes
} from "react-icons/fa";
import "./Projects.css";

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          
          <div className="modal-image-wrapper">
            <img src={project.image} alt={project.title} className="modal-image" />
            <div className="modal-featured-badge">
              <FaStar /> Featured Project
            </div>
          </div>

          <div className="modal-body">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.description}</p>

            <div className="modal-sections">
              <div className="modal-section">
                <h4>Problem Solved</h4>
                <p>{project.problem || "This project addresses real-world challenges through innovative technology solutions."}</p>
              </div>

              <div className="modal-section">
                <h4>Key Features</h4>
                <ul>
                  {project.features ? (
                    project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))
                  ) : (
                    <>
                      <li>User authentication and authorization</li>
                      <li>Responsive and modern UI</li>
                      <li>Real-time data processing</li>
                      <li>Scalable architecture</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="modal-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Development Process</h4>
                <p>Built using agile methodology with continuous integration and deployment, ensuring high-quality code and rapid iteration.</p>
              </div>

              <div className="modal-section">
                <h4>Results & Impact</h4>
                <p>Successfully delivered a production-ready application that provides real value to users with optimal performance and user experience.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, onExplore }) => {
  const cardRef = useRef(null);

  const getCategoryIcon = (category) => {
    const icons = {
      'AI': <FaRobot />,
      'Full Stack': <FaCode />,
      'Web Application': <FaServer />,
      'E-commerce': <FaShoppingCart />,
      'Dashboard': <FaChartLine />,
      'SaaS': <FaCloud />
    };
    return icons[category] || <FaCode />;
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
      className={`project-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      ref={cardRef}
      whileHover={{ y: -8 }}
    >
      <div className="card-glow"></div>
      
      <motion.div
        className="card-image-wrapper"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img src={project.image} alt={project.title} className="card-image" />
        <div className="card-image-overlay">
          <div className="card-category">
            {getCategoryIcon(project.category)}
            <span>{project.category || 'Full Stack'}</span>
          </div>
          <div className="card-status" style={{ background: getStatusColor(project.status) }}>
            {project.status || 'Completed'}
          </div>
        </div>
      </motion.div>

      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>

        <div className="card-tech">
          {project.tech.slice(0, 6).map((tech, i) => (
            <motion.span
              key={i}
              className="card-tech-badge"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 6 && (
            <span className="card-tech-badge more">+{project.tech.length - 6}</span>
          )}
        </div>

        {project.features && project.features.length > 0 && (
          <div className="card-features">
            {project.features.slice(0, 3).map((feature, i) => (
              <span key={i} className="card-feature">
                <span className="feature-dot"></span>
                {feature}
              </span>
            ))}
          </div>
        )}

        <motion.button
          className="card-explore-btn"
          onClick={() => onExplore(project)}
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Project
          <span className="btn-arrow">→</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

// Filter Button Component
const FilterButton = ({ label, active, onClick, count }) => {
  return (
    <motion.button
      className={`filter-btn ${active ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {count !== undefined && <span className="filter-count">{count}</span>}
    </motion.button>
  );
};

// Main Projects Component
function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "AI-Powered Maize Crop Yield Prediction System",
      description: "A full-stack web application using machine learning to predict maize crop yield based on soil nutrients and weather conditions. Features Django REST backend, Next.js dashboard, user authentication, prediction history, and data-driven insights for smart farming decisions.",
      tech: ["Next.js", "Django", "SQLite", "Scikit-Learn", "Machine Learning", "Random Forest", "JWT"],
      image: process.env.PUBLIC_URL + "/corn-cast.PNG",
      category: "AI",
      status: "Completed",
      featured: true,
      features: ["Machine Learning Predictions", "User Authentication", "Prediction History", "Data Visualization"],
      problem: "Farmers lack access to data-driven insights for optimizing crop yield. This system bridges the gap between agricultural data and actionable predictions."
    },
    {
      title: "Nutrition Assistant",
      description: "Next-generation AI Nutrition Assistant. Input your physical targets, dietary restrictions, and preferred ingredients to instantly generate structured, professional-tier meal plans.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js API Routes", "OpenAI API"],
      image: process.env.PUBLIC_URL + "/NUT.PNG",
      category: "AI",
      status: "Production Ready",
      features: ["AI-Generated Meal Plans", "Dietary Restriction Management", "Calorie Tracking", "Nutrition Analysis"],
      problem: "Planning nutritious meals that meet specific dietary requirements is time-consuming. This AI assistant automates meal planning while respecting individual preferences and restrictions."
    },
    {
      title: "Pips-Hunter Academy",
      description: "A self-paced trading education platform built around the three pillars of successful trading: psychology, risk management, and market analysis. Includes trade journaling to help users review decisions, identify patterns, and build long-term consistency.",
      tech: ["React", "Next.js API Routes", "MongoDB"],
      image: process.env.PUBLIC_URL + "/pips.PNG",
      category: "Web Application",
      status: "Completed",
      features: ["Trade Journaling", "Educational Content", "Progress Tracking", "User Authentication"],
      problem: "Traders need a structured learning environment that combines education with practical tools for reviewing and improving their trading decisions."
    },
    {
      title: "Shop Management System",
      description: "A comprehensive shop management system for handling inventory, sales, and customer relationships with AI-powered recommendations.",
      tech: ["React", "Next.js", "MongoDB", "OpenAI API", "Tailwind CSS", "JWT"],
      image: process.env.PUBLIC_URL + "/shop.PNG",
      category: "E-commerce",
      status: "Production Ready",
      features: ["Inventory Management", "Sales Analytics", "AI Recommendations", "Customer CRM"],
      problem: "Small to medium retailers need an affordable, comprehensive solution for managing inventory, sales, and customer relationships in one platform."
    },
    {
      title: "Mental Lab",
      description: "An E-Commerce platform where users can purchase books online with a seamless shopping experience and secure payments.",
      tech: ["React", "Django REST", "SQLite", "Axios"],
      image: process.env.PUBLIC_URL + "/mental lab.PNG",
      category: "E-commerce",
      status: "Completed",
      features: ["Product Catalog", "Shopping Cart", "Secure Payments", "User Reviews"],
      problem: "Readers need an intuitive platform to discover and purchase educational and self-improvement books with a smooth user experience."
    },
    {
      title: "Movie Discovery App",
      description: "Explore movies and TV shows using data from The Movie Database (TMDB) API with advanced search and filtering capabilities.",
      tech: ["React", "TMDB API"],
      image: process.env.PUBLIC_URL + "/project pic one.PNG",
      category: "Web Application",
      status: "Completed",
      features: ["Movie Search", "Advanced Filtering", "Ratings & Reviews", "Watchlist"],
      problem: "Movie enthusiasts need an intuitive interface to discover, track, and organize movies and TV shows from a vast database."
    },
    {
      title: "Next-Notes",
      description: "A Next.js full-stack note-taking app with user registration, authentication, and complete CRUD operations for managing notes.",
      tech: ["React", "Next.js", "NextAuth", "MongoDB"],
      image: process.env.PUBLIC_URL + "/notely1.PNG",
      category: "Web Application",
      status: "Completed",
      features: ["User Authentication", "Create/Edit/Delete Notes", "Rich Text Editor", "Note Categories"],
      problem: "Users need a secure, feature-rich note-taking application that works across devices with seamless synchronization."
    },
    {
      title: "Go-Down System",
      description: "A Next.js frontend system for users to book space to store their goods with an intuitive booking interface.",
      tech: ["Next.js"],
      image: process.env.PUBLIC_URL + "/silquport.PNG",
      category: "SaaS",
      status: "Ongoing",
      features: ["Space Booking", "Availability Calendar", "User Dashboard", "Booking Management"],
      problem: "Storage space seekers need an efficient platform to find, compare, and book storage spaces based on their requirements."
    },
    {
      title: "Note Taking App",
      description: "A simple note-taking app where users can sign up, log in, and create/manage notes with secure authentication.",
      tech: ["React", "Django", "SQLite", "JWT"],
      image: process.env.PUBLIC_URL + "/adding a note.PNG",
      category: "Web Application",
      status: "Completed",
      features: ["User Authentication", "Create/Edit Notes", "Secure Storage", "Responsive Design"],
      problem: "Users need a lightweight, secure application for capturing and organizing notes without unnecessary complexity."
    }
  ];

  const categories = ['All', 'Full Stack', 'AI', 'Web Application', 'E-commerce', 'Dashboard', 'SaaS'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === selectedCategory);

  // Featured project (first one with featured flag)
  const featuredProject = projectData.find(p => p.featured) || projectData[0];
  const regularProjects = filteredProjects.filter(p => p !== featuredProject);

  const handleExplore = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="projects-section" id="projects">
      {/* Background Effects */}
      <div className="projects-bg">
        <div className="gradient-mesh"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-pattern"></div>
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`
          }} />
        ))}
      </div>

      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="header-badge">
            <span className="header-badge-icon">💼</span>
            <span>Portfolio</span>
          </div>
          <h2 className="projects-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="projects-subtitle">
            A collection of real-world applications demonstrating my expertise in full-stack development,
            AI, scalable backend systems, and modern user interfaces.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="featured-project"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="featured-glow"></div>
          <div className="featured-badge">Featured Project</div>
          <div className="featured-content">
            <div className="featured-image-wrapper">
              <motion.img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="featured-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="featured-info">
              <h3 className="featured-title">{featuredProject.title}</h3>
              <p className="featured-description">{featuredProject.description}</p>
              <div className="featured-tech">
                {featuredProject.tech.slice(0, 6).map((tech, i) => (
                  <span key={i} className="featured-tech-badge">{tech}</span>
                ))}
              </div>
              <motion.button
                className="featured-explore-btn"
                onClick={() => handleExplore(featuredProject)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Project →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              count={category === 'All' ? projectData.length : projectData.filter(p => p.category === category).length}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {regularProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onExplore={handleExplore}
            />
          ))}
        </div>

        {/* Empty State */}
        {regularProjects.length === 0 && (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default Projects;