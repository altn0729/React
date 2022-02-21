import React from 'react';
import styles from '../css/videoList.module.css';
import moment from 'moment';
import numeral from 'numeral';

const VideoList = ({ video, onVideoClick }) => {
  console.log(video);

  const {
    id,
    channelIcon,
    snippet: {
      thumbnails: { medium },
      channelTitle,
      description,
      publishedAt,
      title,
      tags,
    },
    statistics: { commentCount, likeCount, viewCount },
  } = video;

  return (
    // 컨텐트 오버시 메뉴 모양 및 영상 시간, 두개 버튼 나오게끔 (포지션 사용)
    <div className={styles.listWrap} onClick={() => onVideoClick(video)}>
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