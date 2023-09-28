import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({});
  }
  const basicAuth = req.headers["authorization"];
  console.log("Un texto " + JSON.stringify(req.headers));
  if (!basicAuth || Array.isArray(basicAuth)) {
    res.status(400).json({ message: "header not set" });
  } else {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    if (user === "fran@gmail.com" && pwd === "perez") {
      console.log("Entro al if");
      res.redirect("/dashboard");
    }
  }
}
