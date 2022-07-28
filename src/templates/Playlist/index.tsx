import { Playlist } from "types/getPlaylists";

export type PlaylistTemplateProps = {
  playlist: Playlist;
};

export const PlaylistTemplate = (props: PlaylistTemplateProps) => {
  const { playlist } = props;

  return <h1>{playlist.name}</h1>;
};
