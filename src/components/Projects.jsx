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
      title: "MENTAL LAB",
       description: "An E-Commerce store, where people can purchase books online.",
      tech: ["ReactJS, DjangoRest Framework, SQLite, Axios"],
     image: process.env.PUBLIC_URL + "/mental lab.PNG", // replace with your own image
    },
    {
       title: "Movie App",
       description: "This app allows users to explore movies and TV shows using data from The Movie Database (TMDB) API",
      tech: ["React","TMDB api"],
     image: process.env.PUBLIC_URL+"/project pic one.PNG", // replace with your own image
    
    },
    {
      title: "Note taking App",
       description: "A simple note taking app, where the user can sign-up, login and create notes",
       tech: ["React, Django, Sqlite, JWT"],
      image: process.env.PUBLIC_URL+"/adding a note.PNG", // replace with your own image
    
    },
    {
      title: "NEXT-NOTES",
       description: "A nextJS fullstack note taking app, where the user can register , login,  create and manage notes",
       tech: ["Nextjs, Nodejs[nextjs],nextAuth, MongoDB."],
      image: process.env.PUBLIC_URL+"/notely1.PNG", // replace with your own image
    
    },

    {
      title: "GO-DOWN SYSTEM",
       description: "A NEXTJS frontend system for users to book space to store their goods",
       tech: ["nextjs, Nodejs[Nextjs], "],
      image: process.env.PUBLIC_URL+"/silquport.PNG", // replace with your own image
    
    },

     {
      title: "AI-POWERED MAIZE CROP YIELD PREDICTION SYSTEM",
       description: "AI Maize Yield Predictor is a full-stack web application that uses machine learning to predict maize crop yield based on soil nutrients and weather conditions. It features a Django REST backend, a Next.js dashboard, user authentication, prediction history, and data-driven insights to support smart farming decisions.",
       tech: ["nextjs, Django, SQLite, SciKit-Learn, Machine Learning"],
      image: process.env.PUBLIC_URL+"/agric.PNG", // replace with your own image
    
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
