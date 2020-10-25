// components/Work/index.js

import React from 'react';
import { Section } from 'components';
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

// const data = firebase(['work'])(WorkList);

export default WorkList;
// export default connect(({ firebase }) => ({
//   work: dataToJS(firebase, 'work'),
// }))(data);
