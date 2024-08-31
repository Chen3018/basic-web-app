// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

import CalculatePrices from "../../utils/QueryProcessor";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.url);
  
  const query = req.query.q as string;
  const response = CalculatePrices([], 0, 0);

  res.status(200).send("response");
}
