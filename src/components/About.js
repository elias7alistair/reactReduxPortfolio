import React from "react";
import {motion} from 'framer-motion'


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
          Hey there. My name is Alistair and I am a frontend developer. I made
          this project using reactJs and redux. It's still not completete. But
          the idea is to use all the knowledge and skills I have in web
          development and build this web app. I used framer-motion for the
          animations. And the cool particles you see in the background is a
          react library called ParticleJS
        </p>
      </motion.div>
    </div>
  );
};

export default About;
