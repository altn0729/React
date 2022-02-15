import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Contents from './components/contents';
import Sidebar from './components/sidebar';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';

const App = ({ youtubeService }) => {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    console.log(query);
    return youtubeService.search(query).then((videos) => setVideos([...videos]));
  };

  useEffect(() => {
    // youtubeService.mostPopular().then((videos) => console.log(videos));
    youtubeService.mostPopular().then((videos) => setVideos([...videos]));

    // 특정 값들이 리렌더링 시에 변경되지 않는다면
    // React로 하여금 effect를 건너뛰도록 할 수 있다. (두번째 인자)
  }, [youtubeService]);

  return (
    <>
      <Header search={search} />
      <div className="app__container">
        <Sidebar />
        <Contents videos={videos} youtubeService={youtubeService} />
      </div>
    </>
  );
};

export default App;
