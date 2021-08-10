import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.list}>
      {videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />;
      })}
    </ul>
  );
};

export default VideoList;
