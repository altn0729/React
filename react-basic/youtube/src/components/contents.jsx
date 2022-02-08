import React, { useEffect } from 'react';
import Content from './content';
import styles from '../css/contents.module.css';

const Contents = ({ getChannels, videos }) => {
  return (
    <div className={styles.contents}>
      {videos.map((content) => (
        <Content key={content.id} getChannels={getChannels} content={content} />
      ))}
    </div>
  );
};

export default Contents;
