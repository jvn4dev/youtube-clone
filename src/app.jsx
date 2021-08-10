import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      ' https://www.googleapis.com/youtube/v3/search?key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0&part=snippet&maxResults=25&q=initialD&key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
