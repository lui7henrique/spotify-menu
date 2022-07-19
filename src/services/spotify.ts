import axios from "axios";

export const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
