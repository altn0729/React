import React, { useEffect } from 'react';
import Content from './content';
import styles from '../css/contents.module.css';

const Contents = ({ videos, channels }) => {
  console.log(`contents: ${channels}`);

  return (
    <div className={styles.contents}>
      {videos.map((content) => (
        <Content key={content.id} content={content} channels={channels} />
      ))}
    </div>
  );
};

export default Contents;
