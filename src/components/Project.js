import React from "react";
import {useSelector} from 'react-redux';
import Card from "./Card";
import "./Project.scss";

const Project = () => {

  const {projects} = useSelector(state => state)
  console.log("state",projects)
  return (
   
    <div className="projectContainer">
      <ul className="container">
        {projects && projects.map((data)=>{
            return <li key={data.id}><Card title={data.title} description={data.description} /></li>
        })}
      </ul>
    </div>
  );
};

export default Project;
