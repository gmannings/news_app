// Interfaces for data from News API.

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}