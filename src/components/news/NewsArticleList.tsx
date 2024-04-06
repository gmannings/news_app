import React, { useEffect, useState } from 'react'
import { NewsApiResponse, NewsArticle } from '@/interfaces/News'
import axios from 'axios'
import NewsArticleTeaser from '@/components/news/NewsArticleTeaser'

const NewsArticleList: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsApiResponse>('/api/news')
        setArticles(response.data.articles)
      } catch (error) {
        console.error(error)
      }
    }

    fetchNews()
  }, [])

  return (
    <div>
      {articles.map((article, index) => (
        <NewsArticleTeaser key={index} article={article} />
      ))}
    </div>
  )
}

export default NewsArticleList
