import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPhotos } from 'actions/index';

import './ProjectItem.css';


class ProjectItem extends Component {

  // PRIVATE

	_handleLinkClick = (e) => {
		e.preventDefault();
		// this.props.loadPhotos(this.props.data.photos);
		// window.$('#modal-carousel').modal('show');
	}

  _renderPhotoLink = () => {
		const {
      linkUrl,
      linkName,
      // photos
    } = this.props.data;

		// if (photos) {
		// 	return (
        // <div className="ProjectItem-link-section">
		// 			<a
            // className="ProjectItem-link"
            // href={ linkUrl }
            // target="_blank"
          // >
            // { linkName }
          // </a>

		// 			<a
            // className="ProjectItem-link"
		// 				href="#"
		// 				onClick={ this._handleLinkClick }
		// 			>
		// 				View Photos
		// 			</a>
		// 		</div>
		// 	);
		// }

		return (
			<div className="ProjectItem-link-section">
				<a href={ linkUrl } target="_blank">{ linkName }</a>
			</div>
		);
	}


	render() {
		const { org, summary, title } = this.props.data;
    const link = this._renderPhotoLink();

		return (
			<li className="ProjectItem">
				<p className="ProjectItem-title">
          { title }
        </p>

				<p className="ProjectItem-org">
          { org }
        </p>

				<p className="ProjectItem-summary">
          { summary }
        </p>

				{ link }
			</li>
		);
	}
}

export default connect(null, { loadPhotos })(ProjectItem);
