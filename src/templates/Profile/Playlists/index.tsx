import { useFetch } from "hooks/useFetch";
import { GetPlaylists } from "types/getPlaylists";
import * as Stitches from "./stiches";

export const Playlists = () => {
  const { data } = useFetch<GetPlaylists>("/me/playlists");

  if (!data) {
    return <h1>carregando...</h1>;
  }

  return (
    <Stitches.PlaylistsListContainer>
      <Stitches.PlaylistsTitle>User playlists</Stitches.PlaylistsTitle>
      <Stitches.PlaylistsList>
        {data.items.map((playlist) => {
          return (
            <Stitches.Playlist>
              <Stitches.PlaylistImageWrapper>
                <Stitches.PlaylistImage
                  src={playlist.images[0].url}
                  layout="fill"
                />
              </Stitches.PlaylistImageWrapper>

              <Stitches.PlaylistName
                style={{
                  WebkitLineClamp: 1,
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  display: "webkit-box",
                  overflow: "hidden",
                }}
              >
                {playlist.name}
              </Stitches.PlaylistName>
            </Stitches.Playlist>
          );
        })}
      </Stitches.PlaylistsList>
    </Stitches.PlaylistsListContainer>
  );
};
