import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./Image.css";

export default class Image extends Component {
  static propTypes = {
    created_at: PropTypes.string,
    placeholder: PropTypes.bool,
    url: PropTypes.shape({
      expanded_url: PropTypes.string
    })
  };

  static defaultProps = {
    created_at: null,
    placeholder: false,
    url: {
      expanded_url: ""
    }
  };

  state = {
    imageError: false,
    link: null,
    loadedImage: false,
    fetchedImageUrl: false
  };

  componentDidMount() {
    const { placeholder } = this.props;
    if (!placeholder) {
      this._getImage();
    }
  }

  // PRIVATE

  _getImage = () => {
    const link = this.props.url.expanded_url;
    const url = "https://tw-portfolio-mts.herokuapp.com/getImage";
    const config = {
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: "POST",
      body: JSON.stringify({ link })
    };
    fetch(url, config)
      .then(res => res.json())
      .then(json => {
        if (json.error || !json.link) {
          return this.setState({
            imageError: true,
            fetchedImageUrl: true,
            link: json.link
          });
        }
        this.setState({
          imageError: false,
          fetchedImageUrl: true,
          link: json.link
        });
      })
      .catch(error => console.log(error));
  };

  _renderImage = () => {
    const ImageClass = this.state.loadedImage
      ? "Image-img"
      : "Image-placeholder-card";
    const image = this.state.imageError ? (
      this._renderErrorPlaceholder()
    ) : (
      <img
        src={this.state.link}
        className={ImageClass}
        alt="Book"
        onError={() => this.setState({ imageError: true })}
        onLoad={() => this.setState({ loadedImage: true })}
      />
    );

    return (
      <div className="Image-card">
        <a
          href={this.props.url.expanded_url}
          className="Image-link"
          target="_blank"
          rel="nofollow"
        >
          {image}
        </a>
        <span className="Image-date">
          {moment(this.props.created_at).format("MMMM Do YYYY")}
        </span>
      </div>
    );
  };

  _renderErrorPlaceholder = () => {
    return <span className="Image-error">Cannot Retrieve Image</span>;
  };

  _renderLoading = () => {
    return <div className="Image-placeholder-card" />;
  };

  render() {
    if (this.state.imageError) {
      return null;
    }
    return this.state.fetchedImageUrl
      ? this._renderImage()
      : this._renderLoading();
  }
}
