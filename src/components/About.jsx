import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          {/* <img src="process.env.PUBLIC_URL +./IMG_20250911_075951.jpg" alt="About me" /> */}
          <img src={process.env.PUBLIC_URL + '/about1.PNG'} alt="Profile" />

        </div>

        {/* Content */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          {/* <p className="about-text">
            I'm a full-stack developer with a strong focus on building clean, 
            scalable, and user-friendly applications. On the frontend, I 
            specialize in <strong>React, JavaScript, HTML, and CSS</strong> to 
            craft responsive and engaging interfaces. On the backend, I work 
            with <strong>Python, Django, and PostgreSQL</strong> to design 
            robust APIs and manage data efficiently.
          </p> */}
          <p className="about-text">
  I'm a full-stack developer focused on building clean, scalable, and user-friendly applications. 
  On the frontend, I specialize in <strong>React, nextJS and CSS</strong> to craft responsive and engaging interfaces. 
  On the backend, I work with <strong>Node.js (Next.js), Django, and MongoDB</strong> to design robust APIs and manage data efficiently.
</p>



          {/* <p className="about-text">
            I also have a growing interest in <strong>Machine Learning</strong>, 
            exploring ways to integrate intelligent features into modern web 
            applications. My workflow is supported by 
            <strong> Git & GitHub</strong>, ensuring clean version control and 
            effective team collaboration.
          </p> */}

          <p className="about-text">
  I enjoy building efficient and modern web applications, constantly improving 
  user experiences and backend performance. My workflow is supported by 
  <strong>Git & GitHub</strong>, ensuring clean version control and effective 
  team collaboration.
</p>


          {/* <p className="about-text">
            Whether I’m creating dynamic dashboards, scalable APIs, or 
            experimenting with ML models, my goal is always the same: 
            deliver impactful solutions that provide real value to users.
          </p> */}
          <p className="about-text">
  Whether I’m building dynamic dashboards, scalable APIs, or interactive web interfaces, 
  my goal is always the same: deliver impactful solutions that provide real value to users.
</p>


          {/* Tech Stack */}
          <h3 className="tech-title">Tech Stack</h3>
          <div className="tech-grid">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js (Next.js)</span>
            <span>Django</span>
            <span>MongoDB</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
