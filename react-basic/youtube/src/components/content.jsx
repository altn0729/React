import React, { useEffect, memo, useState } from 'react';
import styles from '../css/content.module.css';
import moment from 'moment';
import numeral from 'numeral';

// snippet, contentDetails, statistics

const Content = memo(({ content, youtubeService, onVideoClick }) => {
  const [channelIcon, setChannelIcon] = useState(null);

  const {
    snippet: {
      channelId,
      thumbnails: { medium },
      title,
      channelTitle,
      publishedAt,
    },
  } = content;

  const {
    statistics: { viewCount },
  } = content;

  useEffect(() => {
    youtubeService
      .channels(channelId)
      .then((channel) => channel.map((items) => setChannelIcon(items.snippet.thumbnails.default.url)));
  }, [youtubeService, channelId]);

  return (
    <div className={styles.content} onClick={() => onVideoClick(content)}>
      <div>
        <img className={styles.thumbnails} src={medium.url} alt="thumbnails" />
      </div>

      <div className={styles.details}>
        <div className={styles.channelThumbnails}>
          <img src={channelIcon} alt="channelIcon" />
        </div>

        <div className={styles.channelDetails}>
          <h3 className="videoTitle">{title}</h3>
          <p className="channelTitle">{channelTitle}</p>
          <p>
            {viewCount && numeral(viewCount).format('0.a').toUpperCase()} views · {moment(publishedAt).fromNow()}
          </p>
        </div>
      </div>

      <div className={styles.hoverVideo}>
        <p className={styles.hoverPtag}>WATCH LATER</p>
        <p className={styles.hoverPtag}>ADD TO QUEUE</p>
      </div>
    </div>
  );
});

export default Content;
