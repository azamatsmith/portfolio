import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Image.css'


export default class Image extends Component {
  static propTypes = {
    url: PropTypes.shape({
      expanded_url: PropTypes.string
    }),
  }

  static defaultProps = {
    url: {
      expanded_url: ''
    }
  }

  state = {
    link: null,
    loadedImage: false
  }

  componentDidMount() {
    this._getImage();
  }

  // PRIVATE

  _getImage = () => {
    const link = this.props.url.expanded_url;
    const url = 'https://tw-portfolio-mts.herokuapp.com/getImage';
    const config = {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: "POST",
      body: JSON.stringify({link})
    };
    fetch(url, config)
      .then(res => res.json())
      .then(json => {
        this.setState({
          loadedImage: true,
          link: json.link
        });
      })
      .catch(error => console.log(error));
  }

  _renderImage = () => {
    return <img src={this.state.link} className="Image-img" alt="Book" />;
  }

  render() {
    return (
      <div>
        {this.props.text}
        { this.state.loadedImage ? this._renderImage() : null }
      </div>
    );
  }
}
