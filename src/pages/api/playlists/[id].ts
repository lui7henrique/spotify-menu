import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { spotify } from "services/spotify";

const secret = process.env.JWT_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const token = await getToken({ req, secret });

  spotify.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token.accessToken}`;

  try {
    const { data } = await spotify.get(`/playlists/${id}`);

    return res.status(200).json({ ...data });
  } catch (err) {
    return res.status(404).json({ err });
  }
}