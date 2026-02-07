import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Antony Mwangi Portfolio</title>
          <meta
            name="description"
            content="Portfolio website of Antony Mwangi showcasing web development projects built with React, Django, and modern web technologies."
          />
          <meta name="keywords" content="Antony Mwangi, React Developer, Web Developer, Portfolio, Django, JavaScript" />
          <meta name="author" content="Antony Mwangi" />
        </Helmet>

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
