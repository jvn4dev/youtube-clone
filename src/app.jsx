import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import VideoHeader from './components/video_header/video_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 함수가 실행되면 선택된 비디오 정보를 가져와서 상태 변경
  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  // 상태끌어올리기를 통해 Navbar에서 검색된 qry를 받아와서 새로운 쿼리로 불러온 영상을 업데이트함
  const search = (qry) => {
    youtube //
      .search(qry) //
      .then((vdos) => setVideos(vdos));
  };

  // 앱이 실행되고 유튜브 API를 통해 가장 유명한 영상 목록을 가져옴
  useEffect(() => {
    youtube //
      .mostPopular() //
      .then((vdos) => setVideos(vdos));
  }, []); // 종속성 배열을 빈배열로 함으로써 앱 컴포넌트가 불러진 뒤 처음 한번만 리렌더함

  return (
    <>
      <VideoHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </>
  );
}

export default App;
