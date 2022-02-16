import React from 'react';
import styles from '../css/videoDetail.module.css';

const VideoDetail = ({ video }) => {
  return (
    <div className={styles.videoDetail}>
      <h1>{video.snippet.title}</h1>
    </div>
  );
};

export default VideoDetail;
