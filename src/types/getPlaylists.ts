export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [
    {
      height?: number;
      url: string;
      width?: number;
    }
  ];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color?: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

export type GetPlaylists = {
  href: "https://api.spotify.com/v1/users/227kkiv66iygg2sso6cyciroa/playlists?offset=0&limit=50";
  items: Playlist[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
};
