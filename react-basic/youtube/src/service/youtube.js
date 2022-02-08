class Youtube {
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

  async getChannels(channelId) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      },
    });

    return response.data.items;
  }
}

export default Youtube;
