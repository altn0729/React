import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Contents from './components/contents';
import Sidebar from './components/sidebar';
import '@fortawesome/fontawesome-free/js/all.js';
import VideoDetail from './components/videoDetail';
import styles from './app.module.css';

const App = ({ youtubeService }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = (query) => {
    return youtubeService.search(query).then((videos) => setVideos([...videos]));
  };

  const onVideoClick = (video) => {
    setSelectedVideo(video);
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
      {selectedVideo ? (
        // 선택된 비디오가 있으면 해당 비디오 출력
        <div className={styles.videoDetail}>
          {selectedVideo && <VideoDetail video={selectedVideo} videos={videos} onVideoClick={onVideoClick} />}
        </div>
      ) : (
        // 선택된 비디오가 없으면 인기 있는 비디오 출력
        <div className={styles.appContainer}>
          <Sidebar />
          <section className={styles.sectionContainer}>
            <Contents videos={videos} youtubeService={youtubeService} onVideoClick={onVideoClick} />
          </section>
        </div>
      )}
    </>
  );
};

export default App;
