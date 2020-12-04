const fs = require('fs');
const { TwitterClient } = require('twitter-api-client');

require('dotenv').config();

const {
  TWITTER_API_KEY: apiKey,
  TWITTER_API_SECRET: apiSecret,
  TWITTER_ACCESS_TOKEN: accessToken,
  TWITTER_TOKEN_SECRET: accessTokenSecret,
} = process.env;

const twitterClient = new TwitterClient({
  apiKey,
  apiSecret,
  accessToken,
  accessTokenSecret,
});
