import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Twitter from 'twitter';
import './NewReading.css';

export default class NewReading extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    client: null,
  };

  componentDidMount() {
    const params = {
      screen_name: 'azamatsmith',
    };

    const client = new Twitter({
      consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET,
    });

    client.get('statuses/user_timeline', params, (error, tweets, response) => {
      if (!error) {
        console.log('tweets are: ', tweets);
      }
    });
  }

  render() {
    return (
      <div className="Reading">
        <span>ldkfjsdljf</span>
        <span>ldkfjsdljf</span>
        <span>ldkfjsdljf</span>
        <span>ldkfjsdljf</span>
        <span>ldkfjsdljf</span>
        <span>ldkfjsdljf</span>
        Something
      </div>
    );
  }
}
