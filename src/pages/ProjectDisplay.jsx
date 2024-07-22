import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (

    <div className="project">
      <h1> {project.name}</h1>
      
      <img src={project.image} />

      <p>
        <b>Technologies:</b> {project.skills}
      </p>
      
      <div className="alink">
      
      <a href={project.git} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>

      {project.site && (
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <PreviewIcon />
          </a>
        )}
      
      </div>
      
      
    </div>
  )
}

export default ProjectDisplay