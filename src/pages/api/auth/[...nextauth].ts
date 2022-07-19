import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
    }),
  ],
  secret: "CARALHO",
});
