import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { spotify } from "services/spotify";

const secret = process.env.JWT_SECRET;

type Fn = (req: NextApiRequest, res: NextApiResponse) => void;

export const withAuth = (fn: Fn) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req, secret });

    spotify.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token.accessToken}`;

    return await fn(req, res);
  };
};
