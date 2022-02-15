import React, { useEffect, useState } from 'react';
import styles from '../css/filterContent.module.css';
import moment from 'moment';
import numeral from 'numeral';

const FilterContent = ({ content, youtubeService }) => {
  const [statistic, setStatistic] = useState();
  const [channelIcon, setChannelIcon] = useState();

  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      description,
      thumbnails: { medium },
      title,
    },
  } = content;

  // console.log(`${videoId}, ${channelId}, ${channelTitle}, ${publishedAt}, ${medium}, ${title}`);
  useEffect(() => {
    youtubeService.statistics(videoId).then((items) => items.map((item) => setStatistic(item.statistics)));
  }, [youtubeService]);

  useEffect(() => {
    youtubeService
      .channels(channelId)
      .then((channel) => channel.map((items) => setChannelIcon(items.snippet.thumbnails.default.url)));
  }, [youtubeService, channelId]);

  return (
    <div>
      {/* {statistic.viewCount} */}
      <div className={styles.filterContent}>
        <div className="">
          <img className={styles.thumbnails} src={medium.url} alt="thumbnails" />
        </div>
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.statistic}>
            {statistic && numeral(statistic.viewCount).format('0.a').toUpperCase()} views ·{' '}
            {moment(publishedAt).fromNow()}
          </p>
          <div className={styles.channelDetails}>
            <img className={styles.channelIcon} src={channelIcon && channelIcon} alt="channelIcon" />
            <p className={styles.channelTitle}>{channelTitle}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
