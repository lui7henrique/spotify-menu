import { unstable_getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { spotify } from "services/spotify";
import { authOptions } from "../auth/[...nextauth]";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  const token = await getToken({ req, secret });

  console.log(token);

  spotify.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token.accessToken}`;

  try {
    const { data: me } = await spotify.get("/me");

    const { data: playlists } = await spotify.get(
      `https://api.spotify.com/v1/users/${me.id}/playlists`,
      { params: { limit: 20 } }
    );

    return res.status(200).json({ ...playlists });
  } catch (err) {
    return res.status(404).json({ err });
  }

  res.status(200).json({ name: "John Doe" });
}
