// pages/api/image-proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query

  if (typeof url !== 'string' || !url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  try {
    const response = await axios.get(url, {
      responseType: 'stream',
    })

    res.setHeader('Content-Type', response.headers['content-type'])
    response.data.pipe(res)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching the image' })
  }
}
