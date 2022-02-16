export default class YoutubeService {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 24,
        q: query,
      },
    });

    return response.data.items;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, contentDetails, statistics',
        chart: 'mostPopular',
        maxResults: 24,
      },
    });

    return response.data.items;
  }

  async channels(channelId) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      },
    });

    return response.data.items;
  }

  async statistics(id) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'statistics',
        id: id,
      },
    });

    return response.data.items;
  }

  async watch(videoId) {
    const response = await this.youtube.get('watch', {
      Params: {
        v: videoId,
      },
    });

    return response.data;
  }
}
