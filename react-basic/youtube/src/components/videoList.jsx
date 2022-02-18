import React from 'react';
import styles from '../css/videoList.module.css';
import moment from 'moment';
import numeral from 'numeral';

const VideoList = ({ list, onVideoClick }) => {
  const {
    id,
    statistics: { viewCount },
    snippet: {
      thumbnails: { medium },
      publishedAt,
      channelTitle,
      title,
    },
  } = list;

  return (
    // onClick={onVideoClick(list)}
    <div className={styles.listWrap}>
      <div className={styles.listThumb}>
        <img src={medium.url} alt="listThumb" />
      </div>
      <div className={styles.listDetaile}>
        <h3>{title}</h3>
        <span>{channelTitle}</span>
        <span>
          {viewCount && numeral(viewCount).format('0.a').toUpperCase()} views · {moment(publishedAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default VideoList;
