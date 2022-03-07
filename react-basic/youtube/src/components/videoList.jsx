import React from 'react';
import styles from '../css/videoList.module.css';
import moment from 'moment';
import numeral from 'numeral';
import { useEffect, useState } from 'react';

// 필요한 오브젝트 정리
// Channel, statistics 정보
const VideoList = ({ video, onVideoClick, youtubeService }) => {
  console.log(video);
  const [statistics, setStatistics] = useState();

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
    videoId && youtubeService.statistics(videoId).then((items) => items.map((item) => setStatistics(item.statistics)));
    // videoId && youtubeService.statistics(videoId).then((items) => items.map((item) => console.log(item.statistics)));
  }, [youtubeService, videoId]);

  return (
    // 컨텐트 오버시 메뉴 모양 및 영상 시간, 두개 버튼 나오게끔 (포지션 사용)
    <div className={styles.listWrap}
      onClick={() => onVideoClick({ ...video, id: videoId, statistics })}>
      <div className={styles.listThumb}>
        <img src={medium.url} alt="listT humb" />
      </div>
      <div className={styles.listDetaile}>
        <h3>{title}</h3>
        <span>{channelTitle}</span>
        <span>
          {statistics && numeral(statistics.viewCount).format('0.a').toUpperCase()} views ·{' '}
          {moment(publishedAt).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default VideoList;
