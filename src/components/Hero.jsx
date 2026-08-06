import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub as FaGithubIcon,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaDownload,
  FaChartLine,
  FaChartBar
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiJenkins,
  SiPandas,
  SiNumpy,
  SiScikitlearn
} from "react-icons/si";
import "./Hero.css";

// Typing Animation Component
const TypingAnimation = ({ words, delay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, words, delay]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

// Floating Icon Component
const FloatingIcon = ({ Icon, delay = 0, duration = 4, x = 0, y = 0 }) => {
  return (
    <motion.div
      className="floating-icon"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
        x: [0, x || 0, 0]
      }}
      transition={{
        delay,
        duration: duration || 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.6 }
      }}
    >
      <Icon />
    </motion.div>
  );
};

// Particle Component
const Particle = ({ delay, x, y }) => {
  return (
    <motion.div
      className="particle"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        x: [0, x || 50],
        y: [0, y || -50]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: delay || Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Skill Badge Component
const SkillBadge = ({ name, icon: Icon, description, delay = 0 }) => {
  return (
    <motion.div
      className="skill-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)"
      }}
    >
      <Icon className="skill-icon" />
      <span className="skill-name">{name}</span>
      <div className="skill-tooltip">{description}</div>
    </motion.div>
  );
};

// Button Component with Ripple Effect
const Button = ({ children, href, primary = false, download = false, icon: Icon }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples([...ripples, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <motion.a
      href={href}
      className={`btn ${primary ? 'btn-primary' : 'btn-secondary'}`}
      download={download}
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        boxShadow: primary
          ? "0 10px 30px rgba(99, 102, 241, 0.4)"
          : "0 10px 30px rgba(99, 102, 241, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="btn-content">
        {children}
        {Icon && <Icon className="btn-icon" />}
      </span>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="ripple"
          initial={{ scale: 0, opacity: 0.6, x: ripple.x - 50, y: ripple.y - 50 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.a>
  );
};

// Main Hero Component
function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const typingWords = [
    "Full-Stack Web Developer",
    "React & Next.js Developer",
    "Django Backend Engineer",
    "Machine Learning Enthusiast"
  ];

  const floatingIcons = [
    { Icon: FaReact, delay: 0, x: 30, y: -40 },
    { Icon: SiNextdotjs, delay: 1, x: -35, y: -30 },
    { Icon: SiDjango, delay: 2, x: 40, y: 35 },
    { Icon: SiJavascript, delay: 0.5, x: -40, y: 40 },
    { Icon: FaPython, delay: 1.5, x: 0, y: -50 },
    { Icon: SiMongodb, delay: 2.5, x: -30, y: 0 },
    { Icon: FaDocker, delay: 3, x: 35, y: -10 },
    { Icon: FaGitAlt, delay: 3.5, x: -10, y: 45 }
  ];

  const skills = [
    { name: "React", icon: FaReact, description: "UI library for building interfaces" },
    { name: "JavaScript", icon: SiJavascript, description: "Language of the web" },
    { name: "Next.js", icon: SiNextdotjs, description: "React framework with SSR" },
    { name: "Django", icon: SiDjango, description: "Python web framework" },
    { name: "Django REST", icon: SiDjango, description: "REST API framework" },
    { name: "MongoDB", icon: SiMongodb, description: "NoSQL database" },
    { name: "Pandas", icon: SiPandas, description: "Data manipulation library" },
    { name: "NumPy", icon: SiNumpy, description: "Numerical computing library" },
    { name: "Matplotlib", icon: FaChartLine, description: "Data visualization library" },
    { name: "Seaborn", icon: FaChartBar, description: "Statistical visualization" },
    { name: "Machine Learning", icon: SiScikitlearn, description: "ML with scikit-learn" },
    { name: "Docker", icon: FaDocker, description: "Containerization platform" },
    { name: "Jenkins", icon: SiJenkins, description: "CI/CD automation" },
    { name: "Git & GitHub", icon: FaGithubIcon, description: "Version control" }
  ];

  return (
    <section className="hero-section" id="hero" ref={ref}>
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="gradient-mesh"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-pattern"></div>
        
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.15}
            x={(Math.random() - 0.5) * 200}
            y={(Math.random() - 0.5) * 200}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* Left Side - Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }
            }}
          >
            <span className="status-dot"></span>
            Available for Freelance
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
            }}
          >
            👋 Hi, I'm Antony Mwangi
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
            }}
          >
            <TypingAnimation words={typingWords} delay={3000} />
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } }
            }}
          >
            I build <strong>scalable web applications</strong> with modern technologies,
            creating <strong>seamless user experiences</strong> that solve real-world problems.
            From elegant frontends to robust backends, I bring ideas to life through clean code
            and innovative solutions.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { delay: 0.9, duration: 0.5 } }
            }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
              <span className="social-tooltip">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:antony@example.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope />
              <span className="social-tooltip">Email</span>
            </motion.a>
            <motion.a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <FaWhatsapp />
              <span className="social-tooltip">WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } }
            }}
          >
            <Button href="#projects" primary icon={FaArrowRight}>
              View My Projects
            </Button>
            <Button href="/RESUME (10).docx" download icon={FaDownload}>
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile & Floating Elements */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.8 } }
          }}
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`
          }}
        >
          {/* Profile Image with Rings */}
          <div className="profile-wrapper">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            <motion.div
              className="profile-container"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={process.env.PUBLIC_URL + '/portfoliopic.jpeg'}
                alt="Antony Mwangi"
                className="profile-image"
              />
              <div className="profile-glow"></div>
            </motion.div>

            {/* Floating Icons */}
            <div className="floating-icons">
              {floatingIcons.map((icon, index) => (
                <FloatingIcon
                  key={index}
                  Icon={icon.Icon}
                  delay={icon.delay}
                  x={icon.x}
                  y={icon.y}
                />
              ))}
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            className="floating-card card-code"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.6 } }
            }}
            whileInView={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-header">
              <FaCode />
              <span>Code</span>
            </div>
            <div className="code-snippet">
              <span className="line"><span className="keyword">const</span> developer = <span className="string">"Antony"</span>;</span>
              <span className="line"><span className="keyword">const</span> skills = [<span className="string">"React"</span>, <span className="string">"Django"</span>, <span className="string">"ML"</span>];</span>
              <span className="line"><span className="keyword">function</span> <span className="function">build</span>() <span className="bracket">&#123;</span></span>
              <span className="line indent"><span className="keyword">return</span> <span className="string">"awesome apps"</span>;</span>
              <span className="line"><span className="bracket">&#125;</span></span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-building"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.6 } }
            }}
            whileInView={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="card-header">
              <FaRocket />
              <span>Currently Building</span>
            </div>
            <div className="building-content">
              <div className="project-indicator">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
                <span className="project-name">Full-Stack Portfolio</span>
              </div>
              <div className="tech-used">
                <span>React</span>
                <span>Django</span>
                <span>MongoDB</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Preview */}
      <motion.div
        className="skills-preview"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.6 } }
        }}
      >
        <div className="skills-header">
          <span className="skills-label">Tech Stack</span>
          <div className="skills-divider"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
              delay={0.1 + index * 0.05}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;