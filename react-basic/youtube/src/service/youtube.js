class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
      },
    });

    return response.data.items;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet,statistics',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });

    return response.data.items;
  }
}

export default Youtube;
