import React, { useEffect, useState } from 'react';
import Search from './components/search';
import Contents from './components/contents';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Sidebar from './components/sidebar';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  // const [channelIcons, setChannelIcons] = useState([]);

  const search = (query) => {
    return youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => console.log(videos));
    youtube.mostPopular().then((videos) => setVideos(videos));
    // 특정 값들이 리렌더링 시에 변경되지 않는다면
    // React로 하여금 effect를 건너뛰도록 할 수 있다. (두번째 인자)
  }, [youtube]);

  const getChannels = (channelId) => {
    youtube.getChannels(channelId);
    // console.log(youtube.getChannels(channelId));
  };

  return (
    <>
      <Search search={search} />
      <div className="app__container">
        <Sidebar />
        <Contents getChannels={getChannels} videos={videos} />
      </div>
    </>
  );
};

export default App;
