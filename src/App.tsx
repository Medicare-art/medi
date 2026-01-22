import { motion } from 'framer-motion';

import heroImage from './assets/hero.jpeg';

function App() {
  return (
    <main className="main-container">
      {/* Background Glows */}
      <div className="glow-effect glow-1" />
      <div className="glow-effect glow-2" />

      <div className="content-wrapper">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-section"
        >
          <div className="badge">
            <span className="pulse-container">
              <span className="pulse-ring"></span>
              <span className="pulse-dot"></span>
            </span>
            <span className="badge-text">Launching Soon</span>
          </div>

          <h1 className="hero-title">
            Something <br />
            <span className="gradient-text">Extraordinary</span> <br />
            is Coming.
          </h1>

          <p className="hero-description">
            We're crafting a digital experience that will redefine how you interact with healthcare. Stay tuned for the revolution.
          </p>


        </motion.div>

        {/* Right Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="image-section"
        >
          <div className="image-card">
            <img
              src={heroImage}
              alt="Coming Soon"
              className="hero-image"
            />
            <div className="image-overlay" />
          </div>

          {/* Decorative Elements */}
          <div className="deco-glow deco-1" />
          <div className="deco-glow deco-2" />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Medicare. All rights reserved.
      </footer>
    </main>
  );
}


export default App;
