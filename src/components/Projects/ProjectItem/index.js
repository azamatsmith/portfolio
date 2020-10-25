import React from 'react';

import './ProjectItem.css';

function ProjectItem({ data }) {
  const _renderPhotoLink = () => {
    const { linkUrl, linkText } = data;
    return (
      <div className="ProjectItem-link-section">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
    );
  };

  const { org, summary, title } = data;
  const link = _renderPhotoLink();

  return (
    <li className="ProjectItem w-100 w-50-m w-third-l pa4">
      <p className="ProjectItem-title">{title}</p>

      <p className="ProjectItem-org">{org}</p>

      <p className="ProjectItem-summary lh-copy">{summary}</p>

      {link}
    </li>
  );
}

export default ProjectItem;
