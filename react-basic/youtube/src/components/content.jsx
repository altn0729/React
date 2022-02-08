import React, { useEffect } from 'react';
import styles from '../css/content.module.css';
import moment from 'moment';
import numeral from 'numeral';

// snippet, contentDetails, statistics

const Content = ({ getChannels, content }) => {
  const { channelId, thumbnails, title, channelTitle, publishedAt } = content.snippet;
  const { viewCount } = content.statistics;

  console.log(getChannels);

  useEffect(() => {
    getChannels(channelId);
  });

  // const channelsIcons = () => {
  //   channels(channelId);
  // };

  return (
    <div className={styles.content}>
      <div>
        <img className={styles.thumbnails} src={thumbnails.medium.url} alt="thumbnails" />
      </div>

      <div className={styles.details}>
        <img src={thumbnails.default.url} />
        <h3 className="title">{title}</h3>
        <p className="channelTitle">{channelTitle}</p>
        <p>
          {numeral(viewCount).format('0.a').toUpperCase()} views · {moment(publishedAt).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default Content;
