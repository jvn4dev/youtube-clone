import './app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('intial D');

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0&part=snippet&maxResults=25&q=${query}&key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0`;

    axios
      .get(url)
      .then((rsp) => rsp.data)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log('error: ' + err));
  }, [query]);

  return (
    <>
      <Navbar setQuery={setQuery} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
