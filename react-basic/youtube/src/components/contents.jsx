import React from 'react';
import Content from './content';
import styles from '../css/contents.module.css';

const Contents = ({ videos }) => {
  return (
    <div className={styles.contents}>
      {videos.map((content) => (
        <Content key={content.id} content={content} />
      ))}
    </div>
  );
};

export default Contents;
