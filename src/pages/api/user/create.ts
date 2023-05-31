import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/db/client';

interface Data {
  userId: string
  email: string
  name:string
}

export const handler  = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId,email,name }:Data = req.body

  const response = await prisma.user.create({
    data: {
        id:userId,
        email,
        name
    }
  })

  res.status(200).json(response)
}