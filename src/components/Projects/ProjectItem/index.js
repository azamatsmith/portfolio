import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPhotos} from 'actions/index';

import './ProjectItem.css';

class ProjectItem extends Component {
  // PRIVATE

  _handleLinkClick = e => {
    e.preventDefault();
  };

  _renderPhotoLink = () => {
    const {linkUrl, linkName} = this.props.data;

    return (
      <div className="ProjectItem-link-section">
        <a href={linkUrl} target="_blank">
          {linkName}
        </a>
      </div>
    );
  };

  render() {
    const {org, summary, title} = this.props.data;
    const link = this._renderPhotoLink();

    return (
      <li className="ProjectItem w-100 w-50-m w-third-l pa4">
        <p className="ProjectItem-title">{title}</p>

        <p className="ProjectItem-org">{org}</p>

        <p className="ProjectItem-summary lh-copy">{summary}</p>

        {link}
      </li>
    );
  }
}

export default connect(
  null,
  {loadPhotos}
)(ProjectItem);
