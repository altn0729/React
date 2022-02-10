import Content from './content';
import styles from '../css/contents.module.css';

const Contents = ({ videos, youtubeService }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentsHeader}></div>
      <div className={styles.contents}>
        {videos.map((content) => (
          <Content key={content.id} content={content} youtubeService={youtubeService} />
        ))}
      </div>
    </div>
  );
};

export default Contents;
