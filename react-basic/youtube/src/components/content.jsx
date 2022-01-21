import React from 'react';

const Content = ({ content }) => {
  console.log(`This is content${content}`);

  return (
    <div className="content">
      <img src={content.thumbnails} alt="thumbnails" />
      <div className="details">
        <h3 className="title">{content.title}</h3>
        <span className="channelTitle">{content.channelTitle}</span>
      </div>
    </div>
  );
};

export default Content;
