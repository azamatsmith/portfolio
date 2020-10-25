// components/Work/index.js

import React from 'react';

import Section from '../Section';
import WorkItem from './WorkItem';

import work from './data.js';
import './Work.css';

function WorkList() {
  const workList = work.map((work) => {
    return <WorkItem key={work.title} data={work} />;
  });

  return (
    <Section title="Work">
      <div className="Work">
        <ul>{workList}</ul>
      </div>
    </Section>
  );
}

export default WorkList;
