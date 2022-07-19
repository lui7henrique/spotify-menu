import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { spotify } from "services/spotify";

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const nextAuthSecret = process.env.JWT_SECRET;

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
    }),
  ],
  callbacks: {
    async signIn({ account, ...everything }) {
      const { access_token } = account;

      spotify.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;

      return account;
    },
  },
  secret: nextAuthSecret,
};

export default NextAuth(authOptions);
