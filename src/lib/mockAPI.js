const tweets = require('./data/tweets.json').statuses;
let numTweetsSent = 0;

export const getTweets = () => {
  // get num tweets to send (between 1 and 4)
  const numTweets = Math.ceil(Math.random() * 4);

  // if the stream has reached 100 tweets, reset
  if ((numTweetsSent + numTweets) > 100) {
    numTweetsSent = 0;
  }
  numTweetsSent += numTweets;

  return tweets.slice(numTweetsSent - numTweets, numTweetsSent);
}
