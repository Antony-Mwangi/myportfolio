// import React from "react";
// import "./Hero.css"; // separate CSS for Hero

// function Hero() {
//   return (
//     <section className="hero" id="hero">
//       <div className="hero-container">
//         {/* Replace with your own profile photo */}
//         <img
//           src="/IMG_20250910_154858.jpg"
//           alt="Your profile"
//           className="hero-photo"
//         />

//         <h1 className="hero-title">Hi, I'm Antony Mwangi</h1>
//         <h2 className="hero-subtitle">Fullstack Website developer</h2>
        
//         <p className="hero-tagline">
//           I build clean, interactive, and user-friendly web applications.
//         </p>

//         <a href="\mycv2.docx" download className="resume-btn">
//           Download Resume
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Profile Image */}
        <div className="hero-image">
          <img
            src={process.env.PUBLIC_URL + '/portfoliopic.jpeg'}
            alt="Your profile"
            className="hero-photo"
          />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Antony Mwangi</h1>
          <h2 className="hero-subtitle">Fullstack Web Developer </h2>

          <p className="hero-description">
            I’m a passionate web developer focused on building clean, modern, and
            user-friendly digital experiences. I enjoy solving problems with code
            and bringing creative ideas to life.
          </p>

          {/* Skills / Tech Stack */}
          <div className="hero-skills">
             <span>React</span>
            <span>JavaScript</span>
            <span>Next.js</span>
            <span>Django</span>
            <span>DRF</span>
            <span>MongoDB</span>
            <span>Machine Learning</span>
            <span>Docker</span>
            <span>Jenkins</span>
            <span>Git & GitHub</span>
          </div>

          {/* Call to Actions */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="\RESUME.docx" download className="btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
