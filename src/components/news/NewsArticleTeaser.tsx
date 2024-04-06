import React from 'react'
import { NewsArticle } from '@/interfaces/News'
import NewsImage from '@/components/news/NewsImage'

type NewsArticleTeaserProps = {
  article: NewsArticle
}

const NewsArticleTeaser: React.FC<NewsArticleTeaserProps> = ({ article}) => {


  return <article>
    <h2>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        {article.title}
      </a>
    </h2>

    <dl className={'article-metadata'}>
      <dt>By</dt>
      <dd className={'article-author'}>{article.author}</dd>
      <dt>at</dt>
      <dd className={'article-publish'}>{article.publishedAt}</dd>
    </dl>

    {article.urlToImage ?
      <NewsImage src={article.urlToImage} alt={'News article thumbnail'} width={300} height={300}/> :
      null
    }

    <p>{article.description}</p>
  </article>;
};

export default NewsArticleTeaser;