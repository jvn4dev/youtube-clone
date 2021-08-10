import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('intial D');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0&part=snippet&maxResults=25&q=${query}&key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, [query]);

  return (
    <>
      <Navbar setQuery={setQuery} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
