import React from "react";
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../Styles/Project.css";
import ProjectDisplay from "./ProjectDisplay";

function Projects() {
  return (

    <div className='section projects'>
      <h1 className="section__title"> My Personal Projects</h1>
      <div className="projects__grid">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectDisplay id={idx} project={project}  />
          );
        })}
      </div>
    </div>
    
  );
}

export default Projects