// Work/WorkItem/index.js

import React from 'react';
import PropTypes from 'prop-types';
import './WorkItem.css'

const propTypes = {
  data: PropTypes.shape({
    dates: PropTypes.string,
    org: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
  })
};

export default function WorkItem({ data }) {

  const { title, org, dates, summary } = data;

  return (
    <li className="WorkItem">

      <div className="WorkItem-left">
        <p className="WorkItem-title">{title}</p>
        <p className="WorkItem-org">{org}</p>
        <p className="WorkItem-dates">{dates}</p>
      </div>

      <div className="WorkItem-right">
        <p className="WorkItem-summary">{summary}</p>
      </div>

    </li>
  );
}

WorkItem.propTypes = propTypes;

