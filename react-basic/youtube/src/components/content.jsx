import React from 'react';
import styles from '../css/content.module.css';

const Content = ({ content }) => {
  const { thumbnails, title, channelTitle, publishedAt } = content.snippet;
  const { viewCount } = content.statistics;

  return (
    <div className={styles.content}>
      <img src={thumbnails.medium.url} alt="thumbnails" />
      <div className="details">
        <h5 className="title">{title}</h5>
        <span className="channelTitle">{channelTitle}</span>
        <span>
          조회수 {viewCount}회 · {publishedAt}
        </span>
      </div>
    </div>
  );
};

export default Content;
