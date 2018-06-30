// Work/WorkItem/index.js

import React from 'react';
import PropTypes from 'prop-types';
import './WorkItem.css';

const propTypes = {
  data: PropTypes.shape({
    dates: PropTypes.string,
    org: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default function WorkItem({data}) {
  const {title, org, dates, summary} = data;

  return (
    <li className="WorkItem lh-copy mb4 flex-column flex-row-ns">
      <div className="WorkItem-left w-100 w-40-ns">
        <p className="WorkItem-title">{title}</p>
        <p className="WorkItem-org">{org}</p>
        <p className="WorkItem-dates">{dates}</p>
      </div>

      <div className="WorkItem-right w-100 w-60-ns">
        <p className="WorkItem-summary mt2 mt0-ns">{summary}</p>
      </div>
    </li>
  );
}

WorkItem.propTypes = propTypes;
