import React, { useState } from 'react';
import Search from './components/search';
import Contents from './components/contents';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';

const App = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const [contents, setContents] = useState([
    {
      id: 1,
      title: 'title',
      description: 'description',
      thumbnails: 'https://i.ytimg.com/vi/x7Krla_UxRg/hqdefault.jpg',
      channelTitle: 'channelTitle',
    },
  ]);

  const api_base = 'https://www.googleapis.com/youtube/v3/videos';
  const api_key = 'AIzaSyDoxkrngPj8c8g2fxxVFCCQoZ-dUuJktJ4';

  const mostPopular = (contents) => {
    // fetch(
    //   `${video}?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDoxkrngPj8c8g2fxxVFCCQoZ-dUuJktJ4`,
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error));
  };

  return (
    <>
      <Search />
      <Contents contents={contents} /*mostPopular={mostPopular}*/ />
    </>
  );
};

export default App;
