import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${hidden ? "hidden" : "visible"}`}>
      <div className="header-container">
        <div className="social-links">
          <a href="https://github.com/esraa369-cpu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/esraa-elsayed-b0b299253" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <nav className="nav-links">
          <Link to="projects" smooth={true} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} className="cursor-pointer">Contact Me</Link>
        </nav>
      </div>
    </header>
  );
};

const Landing = () => (
  <section id="about" className="landing-section">
     <img src="/avatar.jpg" alt="Your Avatar" className="avatar" />
    <h2>Hello, I am Esraa!</h2>
    <h1> Frontend Developer</h1>
  </section>
);

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Featured Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <h3>Mangata & Gallo</h3>
        <img src="magnata&gallo.png" alt="Mangata & Gallo" className="project-image" />
        <p>A beautifully designed website built with HTML and CSS. It showcases a stylish and responsive layout, perfect for presenting a brand or business.</p>
        <a href="https://esraa369-cpu.github.io/mangata-gallo/">Live Demo →</a>
      </div>
      <div className="project-card">
        <h3>Calculator App</h3>
        <img src="calculator app.jpeg" alt="calculator app" className="project-image" />
        <p>A simple and interactive calculator built using JavaScript, HTML, and CSS. It allows users to perform basic arithmetic operations with a clean and responsive interface.</p>
        <a href="https://esraa369-cpu.github.io/Calculator-App/">Live Demo →</a>
      </div>
      <div className="project-card">
        <h3>Portfolio App</h3>
        <img src="portfolio.png" alt="my-portfolio" className="project-image" />
        <p>My personal portfolio built with React and Tailwind CSS, featuring smooth animations, a contact form, and project showcases.</p>
        <a href="https://esraa369-cpu.github.io/My-Portfolio/">Live Demo →</a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "Freelance", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact me</h2>
      {submitted ? (
        <p className="success-message">Thank you! I'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" className="input-field" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" className="input-field" onChange={handleChange} required />
          <select name="type" className="input-field" onChange={handleChange}>
            <option>Freelance project proposal</option>
            <option>Job opportunity</option>
            <option>General inquiry</option>
          </select>
          <textarea name="message" placeholder="Your Message" className="textarea-field" onChange={handleChange} required></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>Esraa El Sayed - © 2025</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Landing />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
