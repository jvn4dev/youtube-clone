import axios from 'axios';

class Youtube {
  constructor(key) {
    this.key = key;
  }

  // 가장 유명한 영상 목록을 불러와 리턴함
  async mostPopular() {
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&maxResults=25&chart=mostPopular`;
    try {
      const rsp = await axios.get(url);
      const data = rsp.data;
      return data.items;
    } catch (err) {
      return console.log('error: ' + err);
    }
  }

  // 쿼리로 날린 영상들을 불러옴
  async search(qry) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${qry}&type=video&key=AIzaSyDvzt0gZhixUuOHBNkl46RwE8lnSLFmSt0`;

    try {
      const rsp = await axios.get(url);
      const result = rsp.data;
      const items = result.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
      return items;
    } catch (err) {
      return console.log('error: ' + err);
    }
  }
}

export default Youtube;
