import Content from './content';
import styles from '../css/contents.module.css';
import FilterContent from './filterContent';

const Contents = ({ videos, youtubeService, onVideoClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentsHeader}></div>
      <div className={styles.contents}>
        {/* 조건부 렌더링 */}
        {videos.map((content) => {
          if (!content.id.videoId) {
            return (
              <Content key={content.id} content={content} youtubeService={youtubeService} onVideoClick={onVideoClick} />
            );
          } else {
            return (
              <FilterContent
                key={content.id.videoId}
                content={content}
                youtubeService={youtubeService}
                onVideoClick={onVideoClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Contents;
