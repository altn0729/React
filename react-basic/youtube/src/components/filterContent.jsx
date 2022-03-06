import React, { useEffect, useState } from 'react';
import styles from '../css/filterContent.module.css';
import moment from 'moment';
import numeral from 'numeral';

const FilterContent = ({ content, onVideoClick, youtubeService }) => {
  const [statistic, setStatistic] = useState();
  const [channels, setChannels] = useState();

  const {
    id: { videoId },
    snippet: {
      thumbnails: { medium },
      channelId,
      channelTitle,
      description,
      publishedAt,
      title,
      tags,
    },
  } = content;

  useEffect(() => {
    videoId && youtubeService.statistics(videoId).then((result) => setStatistic(result));
  }, [videoId, youtubeService]);

  useEffect(() => {
    channelId &&
      youtubeService
        .channels(channelId)
        .then((channel) => channel.map((items) => setChannels(items.snippet.thumbnails.default.url)));
  }, [youtubeService, channelId]);

  return (
    <div>
      <div
        className={styles.filterContent}
        onClick={() =>
          onVideoClick({
            id: videoId,
            snippet: { thumbnails: { medium }, channelId, channelTitle, publishedAt, description, title, tags },
            statistics: { ...statistic },
          })
        }
      >
        <div>
          <img className={styles.thumbnails} src={medium.url} alt="thumbnails" />
        </div>
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.statistic}>
            {statistic && numeral(statistic.viewCount).format('0.a').toUpperCase()} views{' '}
            {moment(publishedAt).fromNow()}
          </p>
          <div className={styles.channelDetails}>
            <img className={styles.channelIcon} src={channels} alt="channelIcon" />
            <p className={styles.channelTitle}>{channelTitle}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
