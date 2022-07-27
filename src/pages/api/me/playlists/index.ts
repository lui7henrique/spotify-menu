import { getToken } from "next-auth/jwt";
import { spotify } from "services/spotify";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  const token = await getToken({ req, secret });

  spotify.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token.accessToken}`;

  try {
    const { data: me } = await spotify.get("/me");

    const { data: playlists } = await spotify.get(
      `https://api.spotify.com/v1/users/${me.id}/playlists`,
      { params: { limit: 50 } }
    );

    return res.status(200).json({ ...playlists });
  } catch (err) {
    return res.status(404).json({ err });
  }
}
