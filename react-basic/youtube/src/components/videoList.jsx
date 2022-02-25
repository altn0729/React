import React, { useEffect, useState } from 'react';
import styles from '../css/videoList.module.css';
import moment from 'moment';
import numeral from 'numeral';

const VideoList = ({ video, onVideoClick, youtubeService }) => {
  // console.log(video);
  const [statistic, setStatistic] = useState();

  const {
    id: { videoId },
    snippet: {
      thumbnails: { medium },
      channelTitle,
      publishedAt,
      title,
    },
  } = video;

  useEffect(() => {
    videoId && youtubeService.statistics(videoId).then((items) => items.map((item) => setStatistic(item.statistics)));
    // youtubeService.statistics(videoId).then((items) => items.map((item) => console.log(item)));
  }, []);

  console.log(statistic.viewCount);

  // console.log(statistic);
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
          {statistic.viewCount && numeral(statistic.viewCount).format('0.a').toUpperCase()} views ·{' '}
          {moment(publishedAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default VideoList;
