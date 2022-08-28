import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { spotify } from "services/spotify";

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const nextAuthSecret = process.env.JWT_SECRET;

type FormattedAuth = {
  user: User;
  token: string;
};

type FormattedJWT = {
  user: User;
  token: string;
} & JWT;

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-top-read",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
        };
      }

      return token;
    },
  },
  secret: nextAuthSecret,
};

export default NextAuth(authOptions);
