// Skills/index.js

import React from 'react';
import Section from '../Section';
import skills from './data.js';

import './Skills.css';

function Skills() {
  const skillsList = skills.map((skill, i) => (
    <li className="Skills-list-item translate-y-2" key={`${skill}-${i}`}>
      {skill}
    </li>
  ));

  return (
    <Section title="Skills">
      <div className="Skills">
        <ul className="Skills-list">{skillsList}</ul>
      </div>
    </Section>
  );
}

export default Skills;
