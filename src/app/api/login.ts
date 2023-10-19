import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({});
  }
  const basicAuth = req.headers["authorization"];
  if (!basicAuth || Array.isArray(basicAuth)) {
    res.status(400).send({});
  } else {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    if (user && pwd) {
      res.status(200).json({ message: "Login successful" });
    }
  }
}
