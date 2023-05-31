import type { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "@/db/client";

type Data = {
    url: string;
    userId: string;
    appwriteId: string;

}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {url,userId,appwriteId}:Data = await req.body;

    const obj = await prisma.photo.create({
        data:{
            url,
            appwriteId,
            user:{
                connect:{
                    id:userId
                }
            }
        }
    })

    res.status(201).json(obj);

}