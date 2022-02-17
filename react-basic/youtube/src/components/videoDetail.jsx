import React, { useEffect } from 'react';
import styles from '../css/videoDetail.module.css';
import moment from 'moment';
import numeral from 'numeral';

const VideoDetail = ({ video, videos, getChannels, channel }) => {
  // const {
  //   snippet: { thumbnails },
  //   statistics: { subscriberCount },
  // } = channel;

  const {
    id,
    snippet: { channelId, channelTitle, publishedAt, title, tags },
    statistics: { commentCount, likeCount, viewCount },
  } = video;

  // console.log(videos);
  // console.log(video);
  console.log(channel);

  useEffect(() => {
    getChannels(channelId);
  }, [video]);

  return (
    <div className={styles.videoContainer}>
      {/* 비디오 디테일 정보 */}
      <section className={styles.videoSec}>
        <div className={styles.video}>
          <iframe
            className={styles.youtubeIframe}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.videoInfo}>
          {/* 테그명 출력 */}
          {tags.map((tag) => (
            <a href="#" key={tag} className={styles.videoTag}>
              #{tag}
            </a>
          ))}

          {/* 비디오 타이틀 */}
          <h1 className={styles.videoTitle}>{title}</h1>

          <div className={styles.info}>
            <p>
              {/* 비디오 뷰 카운트 및 업로드 날짜 */}
              {numeral(viewCount).format('0,0')} views · {moment(publishedAt).format(`MMM D, YYYY`)}
            </p>
            {/* 비디오 버튼 모음 */}
            <div className={styles.infoBtn}>
              {/* 버튼 크기 77 36 */}
              <button>{numeral(likeCount).format('0.a')}</button>
              <button>DISLIKE</button>
              <button>SHARE</button>
              <button>DOWNLOAD</button>
              <button>SAVE</button>
            </div>
          </div>
        </div>

        {/* 채널 아이콘, 채널명, 구독자 수, 동영상 설명 */}
        <div className="">{/* <img src={channel && channel.snippet.thumbnails.default.url} alt="" /> */}</div>
        {/* 댓글 수 출력 */}
        <div className=""></div>
      </section>

      {/* 우측 정렬된 비디오 리스트 */}
      <div className={styles.videoList}>비디오 리스트</div>
    </div>
  );
};

export default VideoDetail;

// <div className={styles.videoDetail}>
//   <h1>{video.snippet.title}</h1>
// </div>;
