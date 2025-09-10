// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import ThemeToggle from "./ThemeToggle";

// function Navbar() {
//   const [active, setActive] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       let current = "hero";

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100;
//         if (window.scrollY >= sectionTop) {
//           current = section.getAttribute("id");
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">MyPortfolio</div>
//       <ul className="nav-links">
//         <li>
//           <a href="#hero" className={active === "hero" ? "active" : ""}>
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#about" className={active === "about" ? "active" : ""}>
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#projects" className={active === "projects" ? "active" : ""}>
//             Projects
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className={active === "contact" ? "active" : ""}>
//             Contact
//           </a>
//         </li>
//       </ul>
//       <ThemeToggle />
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">MyPortfolio</div>

        {/* Desktop Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#hero"
              className={active === "hero" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Toggle + Hamburger */}
        <div className="nav-actions">
          <ThemeToggle />
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
