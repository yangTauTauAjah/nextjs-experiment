// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('test')
  await new Promise((res, rej) => {
    setTimeout(() => res('hello'), 8000)
  })
  res.status(200).json({ name: 'John Doe' })
}
