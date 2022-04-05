import Content from './content';
import styles from '../css/contents.module.css';
import FilterContent from './filterContent';

const Contents = ({ videos, setVideoObj, youtubeService, onVideoClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentsHeader}></div>
      <div className={styles.contents}>
        {videos.map((content) => {
          if (!content.id.videoId) {
            return (
              <Content
                key={content.id}
                content={content}
                youtubeService={youtubeService}
                onVideoClick={onVideoClick}
                setVideoObj={setVideoObj}
              />
            );
          } else {
            return (
              <FilterContent
                key={content.id.videoId}
                content={content}
                youtubeService={youtubeService}
                onVideoClick={onVideoClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Contents;

{
  /* 조건부 렌더링 */
}

// <div className={styles.contents}>
//   {searchVideos
//     ? searchVideos.map((content) => (
//         <FilterContent
//           key={content.id.videoId}
//           content={content}
//           youtubeService={youtubeService}
//           onVideoClick={onVideoClick}
//         />
//       ))
//     : videos.map((content) => (
//         <Content
//           key={content.id}
//           content={content}
//           youtubeService={youtubeService}
//           onVideoClick={onVideoClick}
//         />
//       ))}
// </div>;

// videos
//           ? videos.map((content) => (
//               <Content key={content.id} content={content} youtubeService={youtubeService} onVideoClick={onVideoClick} />
//             ))
//           : searchVideos.map((content) => (
//               <FilterContent
//                 key={content.id.videoId}
//                 content={content}
//                 youtubeService={youtubeService}
//                 onVideoClick={onVideoClick}
//               />
//             ))
//   !searchVideos
//     ? videos.map((content) => (
//         <Content key={content.id} content={content} youtubeService={youtubeService} onVideoClick={onVideoClick} />
//       ))
//     : searchVideos.map((content) => (
//         <FilterContent
//           key={content.id.videoId}
//           content={content}
//           youtubeService={youtubeService}
//           onVideoClick={onVideoClick}
//         />
//       ));
