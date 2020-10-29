import React from "react";
import Particles from "react-particles-js";
import { motion } from "framer-motion";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Particles
        className="particles"
        width="100vw"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 500,
              },
            },
          },
        }}
      />
      <div className="heroStyle">
        <Router>
          <motion.div
            className="navBar"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.2,
              type: "tween",
              duration: 1,
            }}
          >
            <img src={logo} alt="logo" />
            <ul className="main-nav">
              <switch>
                <Link to='/'>
                  {" "}
                  <li >Home</li>
                </Link>
                <Link to='/about'>
                  {" "}
                  <li>About</li>
                </Link>

                <Link>
                  {" "}
                  <li>Projects</li>
                </Link>
                <Link>
                  {" "}
                  <li>Contact</li>
                </Link>
              </switch>
            </ul>
            <switch>
              <Route path="/about" component={About}></Route>
              <Route  path="/" exact component={Home}></Route>
            </switch>
          </motion.div>
        </Router>
      </div>
    </div>
  );
}

export default App;
