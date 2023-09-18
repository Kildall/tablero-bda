import prismaExample from "@/data/test";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const rta = await prismaExample();
  return res.status(200).json(rta);
}
