import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./Project.scss";
import { motion } from "framer-motion";

const Project = () => {
  const { projects } = useSelector((state) => state);
  console.log("state", projects);
  return (
    <div className="projectContainer">
      <ul className="container">
        {projects &&
          projects.map((data) => {
            return (
              <motion.li
                className="card"
                key={data.id}
                initial={{ y: -119 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400,delay:`0.${data.id-2}` }}
              >
                <Card title={data.title} description={data.description} />
              </motion.li>
            );
          })}
      </ul>
    </div>
  );
};

export default Project;
