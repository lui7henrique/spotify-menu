import { useFetch } from "hooks/useFetch";
import { GetPlaylists } from "types/getPlaylists";
import * as S from "./styles";

export const Playlists = () => {
  const { data } = useFetch<GetPlaylists>("/me/playlists");

  if (!data) {
    return <h1>carregando...</h1>;
  }

  return (
    <S.Container>
      <S.Title>User playlists</S.Title>

      <S.Playlists>
        {data.items.map((playlist) => {
          return (
            <></>
            // <S.Playlist>
            //   <S.PlaylistImageWrapper>
            //     <S.PlaylistImage src={playlist.images[0].url} layout="fill" />
            //   </S.PlaylistImageWrapper>

            //   <S.PlaylistName
            //     style={{
            //       WebkitLineClamp: 1,
            //       textOverflow: "ellipsis",
            //       WebkitBoxOrient: "vertical",
            //       display: "webkit-box",
            //       overflow: "hidden",
            //     }}
            //   >
            //     {playlist.name}
            //   </S.PlaylistName>
            // </S.Playlist>
          );
        })}
      </S.Playlists>
    </S.Container>
  );
};
