import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="hero-text"
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{
        delay: 1.4,
        type: "spring",
        stiffness: 120,
      }}
    >
      <h1 className="hello">hello,</h1>
      <h1 className="World">world!</h1>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.6,
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
    </motion.div>
  );
};

export default Home;
