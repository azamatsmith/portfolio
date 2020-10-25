// components/Project/index.js

import React from 'react';
import Section from '../Section';
import ProjectItem from './ProjectItem';
import projects from './data.js';
import './Projects.css';

function Projects() {
  const projectList = projects.map((project) => {
    return <ProjectItem data={project} key={project.title} />;
  });

  return (
    <Section title="Projects">
      <div className="Projects">
        <ul className="Projects-list">{projectList}</ul>
      </div>
    </Section>
  );
}

export default Projects;
