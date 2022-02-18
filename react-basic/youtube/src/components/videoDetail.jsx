import React from 'react';
import styles from '../css/videoDetail.module.css';
import moment from 'moment';
import numeral from 'numeral';
import VideoList from './videoList';

const VideoDetail = ({ video, videos }) => {
  const {
    id,
    channelIcon,
    snippet: { channelTitle, description, publishedAt, title, tags },
    statistics: { commentCount, likeCount, viewCount },
  } = video;

  console.log(videos);

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
          {tags.map((tag, index) => (
            <a href="#" key={index} className={styles.videoTag}>
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
        <div className={styles.videoDescription}>
          <div className={styles.channelDetaile}>
            <img className={styles.channelIcon} src={channelIcon} alt="channelIcon" />
            <div className={styles.channelInfo}>
              <p className={styles.channelTitle}>{channelTitle}</p>
              <p className={styles.subscriberCount}>19.9M subscribers</p>
            </div>
          </div>
          <button className={styles.subscriberBtn}>SUBSCRIBE</button>
        </div>
        <div className={styles.description}>
          {description.split('\n').map((text, index) =>
            text !== '' ? (
              // key 값으로 넣을수 있는게 없어서 임시로 index 값 사용
              // index는 배열의 순서가 바뀌면 index도 바뀌기 때문에 권장하지 않음.
              <span key={index}>
                {text}
                <br />
              </span>
            ) : (
              <br key={index} />
            )
          )}
        </div>

        <hr className={styles.videoDesHr} />

        {/* 댓글 수 출력 */}
        <div className={styles.comments}>
          <p>{commentCount} Comments</p>
        </div>
      </section>

      {/* 우측 정렬된 비디오 리스트 */}
      <div className={styles.videoList}>
        {videos.map((list) => (
          <VideoList key={videos.etag} list={list} />
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;

// <div className={styles.videoDetail}>
//   <h1>{video.snippet.title}</h1>
// </div>;
