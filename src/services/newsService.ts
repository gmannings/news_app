import axios from 'axios'
import { NewsApiResponse } from '@/interfaces/News'

const API_ENDPOINT = 'https://newsapi.org/v2'
const API_KEY = process.env.NEWS_API_KEY

const newsService = {
  getTopHeadlines: async (country: string = 'us'): Promise<NewsApiResponse> => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/top-headlines`, {
        params: {
          country,
          apiKey: API_KEY,
        },
      })
      return response.data
    } catch (error) {
      throw new Error('Error fetching news')
    }
  },
}

export default newsService
