import React from 'react';
const Project = ({ project }) => {
  return (
    <div className="">
      <div className="project">
        <div>
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>

        <a href={project.link} target="_blank" className="link">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24"  ><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path></svg>
        </a>
      </div>
    </div>
  );
}

export default Project;

