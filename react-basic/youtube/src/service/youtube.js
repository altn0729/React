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

    // response.data.items.map((result) => console.log(result.id.videoId));
    // response.data.items.map(async (result) =>
    //   this.statistics(result.id.videoId).then((item) => console.log({ ...result, ...item[0] }))
    // );

    return response.data.items;
  }

  async channels(channelId) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet, statistics',
        id: channelId,
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

  async statistics(videoId) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'statistics',
        id: videoId,
      },
    });

    return response.data.items;
    // return response.data.items;
  }
}
