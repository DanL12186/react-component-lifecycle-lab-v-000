import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() { //sets stat's tweets to this.props.newTweets (getTweets from mockAPI.js)
    this.state.tweets = this.props.newTweets
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets > 0)
  }

  componentWillReceiveProps(nextProps) {
    this.state.tweets.unshift(nextProps.newTweets[0])
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
