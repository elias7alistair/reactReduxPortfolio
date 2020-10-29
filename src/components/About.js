import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="hero-text">
      <h1 className="hello">About me</h1>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          duration: 1,
        }}
      >
        <p>
          I am a front end developer. That's it. privacy is important..lol. But
          I also like competitive online FPS games. So if you play CS or Valorant
          let me know.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
