
import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        
        <div className="about-image">
          <img
            src={process.env.PUBLIC_URL + "/about1.PNG"}
            alt="Profile"
          />
        </div>

        
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I'm a full-stack developer focused on building clean, scalable, and
            user-friendly applications. I enjoy crafting modern interfaces and
            designing efficient backend systems that scale.
          </p>

          <p className="about-text">
            My workflow emphasizes performance, maintainability, and good
            developer experience, supported by strong version control and
            automation practices.
          </p>

          <p className="about-text">
            Whether I’m building dashboards, APIs, or data-driven features, my
            goal is always the same: deliver impactful solutions that provide
            real value.
          </p>

          
          <h3 className="tech-title">Tech Stack</h3>

          <div className="tech-sections">

            
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-grid">
                <span>React</span>
                <span>Next.js</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>

            
            <div className="tech-category">
              <h4>Backend</h4>
              <div className="tech-grid">
                <span>Django</span>
                <span>Django REST Framework</span>
                <span>Next.js API Routes</span>
                <span>MongoDB</span>
              </div>
            </div>

            
            <div className="tech-category">
              <h4>DevOps & Automation</h4>
              <div className="tech-grid">
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>CI/CD [Jenkins]</span>
              </div>
            </div>

            
            <div className="tech-category">
              <h4>Data Science & Machine Learning</h4>
              <div className="tech-grid">
                <span>Python</span>
                <span>scikit-learn</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
