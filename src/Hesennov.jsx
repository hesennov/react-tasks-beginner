import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import htmlLogo from "./assets/htmlLogo.png";
import cssLogo from "./assets/cssLogo.png";
import reactLogo from "./assets/reactLogo.jpg";
import jsLogo from "./assets/jsLogo.png";
import nodeLogo from "./assets/nodeLogo.png";
import "./style.css";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function Hesennov() {
  const project1 = {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/237/200/300",
    demoLink: "#",
    sourceLink: "#",
  };
  const project2 = {
    id: 2,
    title: "Project 2",
    description: "This is the description of Project 2.",
    image: "project2.jpg",
    link: "https://picsum.photos/seed/picsum/200/300",
  };

  const project3 = {
    id: 3,
    title: "Project 3",
    description: "This is the description of Project 3.",
    image: "project3.jpg",
    link: "https://picsum.photos/200/300?grayscale",
  };
  const projects = [project1, project2, project3];

  return (
    <>
      <div className="App">
        <header>
          <nav>
            <div className="logo">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hesennov
              </motion.h1>
            </div>
            <ul className="nav-links">
              <li>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  href="#about"
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  href="#projects"
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  href="#contact"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="hero">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I'm Həsən Həsənov
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              A Front-End Developer
            </motion.p>
            <button>Get in touch</button>
          </section>
          <section className="technologies">
            <h2>Technologies I Work With</h2>
            <div className="tech-icons">
              <img src={htmlLogo} alt="HTML Logo" />
              <img src={cssLogo} alt="CSS Logo" />
              <img src={jsLogo} alt="JavaScript Logo" />
              <img src={reactLogo} alt="React Logo" />
              <img src={nodeLogo} alt="Node.js Logo" />
            </div>
          </section>
          <section className="blog">
            <h2>Latest Blog Posts</h2>
            <div className="blog-posts">{/* Blog post items go here */}</div>
          </section>
        </main>
        <section id="about">
          <div className="about-container">
            <motion.h2
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
            >
              About Me
            </motion.h2>
            <motion.p
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
            >
              I am a front-end developer who specializes in React and
              TypeScript. I am passionate about creating clean and responsive
              user interfaces that provide a seamless user experience. I am
              constantly seeking new challenges and opportunities to improve my
              skills and stay up-to-date with the latest web development trends.
            </motion.p>
          </div>
        </section>

        <section id="projects">
          <div className="projects-container">
            <motion.h2
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
            >
              Projects
            </motion.h2>
            <div className="project">
              <motion.img
                src={"https://picsum.photos/200/300?grayscale"}
                alt="Project 1"
                whileHover={{ scale: 1.1 }}
              />
              <div className="project-details">
                <motion.h3 whileHover={{ color: "#6D28D9" }}>
                  Project 1
                </motion.h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  id leo turpis. Sed sit amet magna lobortis, auctor justo non,
                  lacinia massa.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
            <div className="project">
              <motion.img
                src={"https://picsum.photos/id/237/200/300"}
                alt="Project 2"
                whileHover={{ scale: 1.1 }}
              />
              <div className="project-details">
                <motion.h3 whileHover={{ color: "#6D28D9" }}>
                  Project 2
                </motion.h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  id leo turpis. Sed sit amet magna lobortis, auctor justo non,
                  lacinia massa.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Hesennov;
