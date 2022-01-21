import React, { useEffect, useState } from 'react';
import Search from './components/search';
import Contents from './components/contents';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Sidebar from './components/sidebar';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    return youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    // youtube.mostPopular().then((videos) => console.log(videos));
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Search search={search} />
      <div className="app__container">
        <Sidebar />
        <Contents videos={videos} />
      </div>
    </>
  );
};

export default App;
