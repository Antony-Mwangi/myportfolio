import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  FaCode, 
  FaRocket, 
  FaProjectDiagram, 
  FaLaptopCode, 
  FaCloud, 
  FaDatabase, 
  FaRobot,
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaChartLine,
  FaChartBar
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiDjango, 
  SiMongodb, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiNextdotjs,
  SiCplusplus
} from "react-icons/si";
import "./About.css";

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Tech Icon Component
const TechIcon = ({ name, icon: Icon, level, description, years }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="tech-icon-wrapper"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="tech-icon-container">
        <Icon className="tech-icon" />
        <div className="tech-icon-tooltip">
          <div className="tooltip-name">{name}</div>
          {description && <div className="tooltip-desc">{description}</div>}
          {years && <div className="tooltip-years">{years} years</div>}
        </div>
      </div>
      <div className="tech-icon-level">
        <div className="level-bar">
          <motion.div
            className="level-fill"
            initial={{ width: 0 }}
            animate={isHovered ? { width: `${level}%` } : { width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, label, target, suffix = "+", delay = 0 }) => {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
    >
      <div className="stat-icon"><Icon /></div>
      <div className="stat-number">
        <AnimatedCounter target={target} suffix={suffix} />
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

// Tech Category Component
const TechCategory = ({ title, icon: Icon, technologies, delay = 0 }) => {
  return (
    <motion.div
      className="tech-category-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)" }}
    >
      <div className="category-header">
        <Icon className="category-icon" />
        <h4>{title}</h4>
      </div>
      <div className="tech-icons-grid">
        {technologies.map((tech, index) => (
          <TechIcon
            key={index}
            name={tech.name}
            icon={tech.icon}
            level={tech.level || 85}
            description={tech.description}
            years={tech.years}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Main About Component
function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const techCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      technologies: [
        { name: "HTML5", icon: FaHtml5, level: 95, years: 5 },
        { name: "CSS3", icon: FaCss3Alt, level: 90, years: 5 },
        { name: "JavaScript", icon: FaJs, level: 90, years: 5 },
        { name: "TypeScript", icon: SiTypescript, level: 85, years: 3 },
        { name: "Python", icon: FaPython, level: 88, years: 4 },
        { name: "SQL", icon: FaDatabase, level: 80, years: 4 },
        { name: "C++", icon: SiCplusplus, level: 75, years: 3 }
      ]
    },
    {
      title: "Frontend Development",
      icon: FaReact,
      technologies: [
        { name: "React", icon: FaReact, level: 92, years: 4 },
        { name: "Next.js", icon: SiNextdotjs, level: 85, years: 3 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, years: 3 },
        { name: "JavaScript", icon: FaJs, level: 90, years: 5 },
        { name: "HTML5", icon: FaHtml5, level: 95, years: 5 },
        { name: "CSS3", icon: FaCss3Alt, level: 90, years: 5 }
      ]
    },
    {
      title: "Backend Development",
      icon: FaNodeJs,
      technologies: [
        { name: "Django", icon: SiDjango, level: 85, years: 3 },
        { name: "Django REST", icon: SiDjango, level: 82, years: 3 },
        { name: "Next.js API", icon: SiNextdotjs, level: 80, years: 2 },
        { name: "MongoDB", icon: SiMongodb, level: 78, years: 3 }
      ]
    },
    {
      title: "DevOps & Automation",
      icon: FaCloud,
      technologies: [
        { name: "Git", icon: FaGitAlt, level: 90, years: 5 },
        { name: "GitHub", icon: FaGithub, level: 88, years: 5 },
        { name: "Docker", icon: FaDocker, level: 75, years: 2 },
        { name: "Jenkins", icon: FaJenkins, level: 70, years: 2 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: FaRobot,
      technologies: [
        { name: "Python", icon: FaPython, level: 88, years: 4 },
        { name: "scikit-learn", icon: SiScikitlearn, level: 80, years: 3 },
        { name: "Pandas", icon: SiPandas, level: 82, years: 3 },
        { name: "NumPy", icon: SiNumpy, level: 85, years: 3 },
        { name: "Matplotlib", icon: FaChartLine, level: 78, years: 2 },
        { name: "Seaborn", icon: FaChartBar, level: 75, years: 2 }
      ]
    }
  ];

  const stats = [
    { icon: FaProjectDiagram, label: "Projects Completed", target: 25, suffix: "+" },
    { icon: FaLaptopCode, label: "Freelance Experience", target: 4, suffix: "+ years" },
    { icon: FaCode, label: "Technologies", target: 30, suffix: "+" },
    { icon: FaRocket, label: "Continuous Learning", target: 12, suffix: "+ courses" }
  ];

  return (
    <section className="about-section" id="about" ref={ref}>
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="gradient-mesh"></div>
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }}
        >
          <div className="badge">
            <span className="badge-icon">👨‍💻</span>
            <span className="badge-text">About Me</span>
          </div>
          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
            }}
          >
            <span className="gradient-text">About Me</span>
          </motion.h1>
          <motion.div
            className="heading-underline"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              visible: { width: "60px", transition: { delay: 0.4, duration: 0.8 } }
            }}
          />
        </motion.div>

        {/* About Card */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }
          }}
          whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(99, 102, 241, 0.15)" }}
        >
          <div className="about-card-inner">
            <div className="about-image-wrapper">
              <motion.div
                className="about-image-container"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/about1.PNG"}
                  alt="Profile"
                  className="about-image"
                />
                <div className="image-glow"></div>
              </motion.div>
            </div>

            <div className="about-text-content">
              <motion.p
                className="about-text"
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } }
                }}
              >
                I'm a <strong>full-stack developer</strong> passionate about building <strong>clean, scalable, and user-friendly</strong> applications. I craft modern interfaces and design efficient backend systems that scale with business needs.
              </motion.p>

              <motion.p
                className="about-text"
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { delay: 0.7, duration: 0.5 } }
                }}
              >
                My workflow emphasizes <strong>performance, maintainability, and exceptional developer experience</strong>, supported by robust version control and automation practices that ensure quality at every stage.
              </motion.p>

              <motion.p
                className="about-text"
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { delay: 0.9, duration: 0.5 } }
                }}
              >
                Whether I'm building <strong>dashboards, APIs, or data-driven features</strong>, my goal remains consistent: deliver impactful solutions that provide real value and solve meaningful problems.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="tech-stack-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="tech-stack-header">
            <h2 className="tech-stack-title">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="tech-stack-subtitle">
              Technologies I work with to build exceptional solutions
            </p>
          </div>

          <div className="tech-categories-grid">
            {techCategories.map((category, index) => (
              <TechCategory
                key={index}
                title={category.title}
                icon={category.icon}
                technologies={category.technologies}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;