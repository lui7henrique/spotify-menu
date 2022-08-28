import { NextApiRequest, NextApiResponse } from "next";
import { spotify } from "services/spotify";
import { withAuth } from "utils/auth";

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  const { time_range, limit } = req.query;

  try {
    const { data } = await spotify.get(`/me/top/artists`, {
      params: {
        time_range: time_range,
        limit: limit,
      },
    });

    return res.status(200).json({ ...data });
  } catch (err) {
    return res.status(404).json({ err });
  }
});

export default handler;
