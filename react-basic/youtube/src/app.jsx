import React, { useEffect, useState } from 'react';
import Search from './components/search';
import Contents from './components/contents';
import Sidebar from './components/sidebar';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [channers, setChanners] = useState([]);

  const search = (query) => {
    return youtube.search(query).then((videos) => setVideos(videos));
  };

  const channels = (channelId) => {
    youtube.getChannels(channelId).then((channels) => channels.map((channel) => setChanners([...channel.snippet])));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => console.log(videos));
    youtube.mostPopular().then((videos) => setVideos([...videos]));

    // 특정 값들이 리렌더링 시에 변경되지 않는다면
    // React로 하여금 effect를 건너뛰도록 할 수 있다. (두번째 인자)
  }, [youtube]);

  return (
    <>
      <Search search={search} />
      <div className="app__container">
        <Sidebar />
        <Contents videos={videos} channers={channels} />
        {/* <Contents getChannels={getChannels} videos={videos} /> */}
      </div>
    </>
  );
};

export default App;
