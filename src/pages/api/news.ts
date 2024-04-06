import type { NextApiRequest, NextApiResponse } from 'next';
import newsService from '@/services/newsService'
import { NewsApiResponse } from '@/interfaces/News'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<NewsApiResponse>
) {
  res.status(200).json(await newsService.getTopHeadlines());
}