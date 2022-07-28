import { GetServerSideProps } from "next";
import { LayoutDefault } from "layout/Default";
import { PlaylistTemplate, PlaylistTemplateProps } from "templates/Playlist";

type PlaylistProps = PlaylistTemplateProps;

export default function PlaylistPage(props: PlaylistProps) {
  return (
    <LayoutDefault>
      <PlaylistTemplate {...props} />
    </LayoutDefault>
  );
}

// |---> SERVER SIDE

import { withAuth } from "utils/withAuth";
import { spotify } from "services/spotify";

export const getServerSideProps: GetServerSideProps = withAuth(async (ctx) => {
  const { id } = ctx.params;

  const { data } = await spotify.get(`/playlists/${id}`);

  return {
    props: {
      playlist: data,
    },
  };
});
