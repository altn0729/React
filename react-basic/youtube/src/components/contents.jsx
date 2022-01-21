import React from 'react';
import Content from './content';

const Contents = ({ contents }) => {
  // console.log(`This is content${mostPopular}`);
  console.log(`This is content${contents}`);

  return (
    <div className="contents">
      {contents.map((content) => (
        <Content key={content.id} content={content} />
      ))}
    </div>
  );
};

export default Contents;
