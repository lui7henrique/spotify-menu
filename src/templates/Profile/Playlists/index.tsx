import { useFetch } from "hooks/useFetch";
import { GetPlaylists } from "types/getPlaylists";
import * as S from "./stiches";

export const Playlists = () => {
  const { data } = useFetch<GetPlaylists>("/me/playlists");

  if (!data) {
    return <h1>carregando...</h1>;
  }

  return (
    <S.PlaylistsListContainer>
      <S.PlaylistsTitle>User playlists</S.PlaylistsTitle>

      <S.PlaylistsList>
        {data.items.map((playlist) => {
          return (
            <S.Playlist>
              <S.PlaylistImageWrapper>
                <S.PlaylistImage src={playlist.images[0].url} layout="fill" />
              </S.PlaylistImageWrapper>

              <S.PlaylistName
                style={{
                  WebkitLineClamp: 1,
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  display: "webkit-box",
                  overflow: "hidden",
                }}
              >
                {playlist.name}
              </S.PlaylistName>
            </S.Playlist>
          );
        })}
      </S.PlaylistsList>
    </S.PlaylistsListContainer>
  );
};
