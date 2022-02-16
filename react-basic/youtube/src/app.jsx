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
    console.log(query);
    return youtubeService.search(query).then((videos) => setVideos([...videos]));
  };

  const onVideoClick = (video) => {
    setSelectedVideo(video);
    console.log(video);
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
      <div className={styles.appContainer}>
        <Sidebar />
        <section className={styles.sectionContainer}>
          {selectedVideo ? (
            <div className="">{selectedVideo && <VideoDetail video={selectedVideo} />}</div>
          ) : (
            <Contents videos={videos} youtubeService={youtubeService} onVideoClick={onVideoClick} />
          )}
        </section>
      </div>
    </>
  );
};

export default App;

/* <section className={styles.sectionContainer}>
  {selectedVideo ? (
    <div className="">{selectedVideo && <VideoDetail video={selectedVideo} />}</div>
  ) : (
    <Contents videos={videos} youtubeService={youtubeService} onVideoClick={onVideoClick} />
  )}
</section>; */

{
  /* <section className={styles.sectionContainer}>
  <div className={styles.videoDetail}>{selectedVideo && <VideoDetail video={selectedVideo} />}</div>
  <div className={styles.videoList}>
    <Contents videos={videos} youtubeService={youtubeService} onVideoClick={onVideoClick} />
  </div>
</section>; */
}

{
  /* <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameborder="0"
        allowfullscreen
      ></iframe>
      ; */
}
