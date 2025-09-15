// import React from "react";
// import ProjectCard from "./ProjectCard";
// import "./Projects.css";

// function Projects() {
//   const projectData = [
//     {
//       title: "Portfolio Website",
//       description: "A personal portfolio to showcase my projects and skills.",
//       tech: ["React", "CSS"],
//       liveLink: "#", // replace with your live URL
//       githubLink: "#", // replace with your GitHub repo
//       image: "/portfolio.PNG", // replace with your screenshot
//     },
//     {
//       title: "Note taking App",
//       description: "A simple note taking app, where the user can sign-up, login and create notes",
//       tech: ["React, Django, Sqlite, JWT"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "/adding a note.PNG",
//     },
//     {
//       title: "Movie App",
//       description: "This app allows users to explore movies and TV shows using data from The Movie Database (TMDB) API",
//       tech: ["React","TMDB api"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "/project pic one.PNG",
//     },
//   ];

//   return (
//     <section className="projects" id="projects">
//       <h2 className="projects-title">My Projects</h2>
//       <div className="projects-grid">
//         {projectData.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;











import React from "react";
import "./Projects.css";

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
       description: "A personal portfolio to showcase my projects and skills.",
      tech: ["ReactJS"],
     image: process.env.PUBLIC_URL + "/portfolio.PNG", // replace with your own image
      demo: "https://your-ecommerce-demo.com",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
       title: "Movie App",
       description: "This app allows users to explore movies and TV shows using data from The Movie Database (TMDB) API",
      tech: ["React","TMDB api"],
     image: process.env.PUBLIC_URL+"/images/project-pic-one.png", // replace with your own image
      demo: "https://your-portfolio.com",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Note taking App",
       description: "A simple note taking app, where the user can sign-up, login and create notes",
       tech: ["React, Django, Sqlite, JWT"],
      image: process.env.PUBLIC_URL+"/adding a note.PNG", // replace with your own image
      demo: "https://your-ml-demo.com",
      github: "https://github.com/yourusername/ml-dashboard",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
