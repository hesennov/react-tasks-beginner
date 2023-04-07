import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const Footerr = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="left">
          <h2>About Us</h2>
          <p>
            I am a front-end developer who specializes in React and TypeScript.
            I am passionate about creating clean and responsive user interfaces
            that provide a seamless user experience. I am constantly seeking new
            challenges and opportunities to improve my skills and stay
            up-to-date with the latest web development trends.
          </p>
        </div>
        <div className="right">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: hasanhasanov345@gmail.com</li>
            <li>Phone: +994 770 293 10 00</li>
            <li>Address: akhmed racabli 156</li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footerr;
