import { LayoutDefault } from "layout/Default";
import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import { api } from "services/api";
import { spotify } from "services/spotify";
import { PlaylistTemplate } from "templates/Playlist";
import { Playlist } from "types/getPlaylists";
import { withAuth } from "utils/withAuth";

type PlaylistProps = {
  playlist: Playlist;
};

export default function PlaylistPage(props: PlaylistProps) {
  const { playlist } = props;
  console.log(playlist);

  return (
    <LayoutDefault>
      <PlaylistTemplate />
    </LayoutDefault>
  );
}

export const getServerSideProps: GetServerSideProps = withAuth(async (ctx) => {
  const { id } = ctx.params;

  const { data } = await spotify.get(`/playlists/${id}`);

  return {
    props: {
      playlist: data,
    },
  };
});
