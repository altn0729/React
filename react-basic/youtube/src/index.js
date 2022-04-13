import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import axios from 'axios';
import YoutubeService from './service/youtube.js';
import './index.css';
import '@fontsource/roboto';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtubeService = new YoutubeService(httpClient);

// document.cookie = 'safeCookie1=foo; SameSite=Lax';
// document.cookie = 'safeCookie2=foo';
// document.cookie = 'crossCookie=bar; SameSite=None; Secure';

https: ReactDOM.render(
  <React.StrictMode>
    <App youtubeService={youtubeService} />
  </React.StrictMode>,
  document.getElementById('root')
);
