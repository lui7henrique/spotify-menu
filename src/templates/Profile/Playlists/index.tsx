import { useFetch } from "hooks/useFetch";
import Link from "next/link";
import { WaveSpinner } from "react-spinners-kit";
import { GetPlaylists } from "types/getPlaylists";
import * as S from "./styles";

export const Playlists = () => {
  const { data } = useFetch<GetPlaylists>("/me/playlists");

  if (!data) {
    return (
      <S.LoadingContainer>
        <WaveSpinner color="#1ed760" />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <S.Title>User playlists</S.Title>

      <S.Playlists>
        {data.items.map((playlist) => {
          return (
            <Link href={`/playlist/${playlist.id}`} passHref>
              <S.Playlist>
                <S.PlaylistImageWrapper>
                  <S.PlaylistImage src={playlist.images[0].url} layout="fill" />
                </S.PlaylistImageWrapper>

                <S.PlaylistNameContainer>
                  <S.PlaylistName>{playlist.name}</S.PlaylistName>
                </S.PlaylistNameContainer>

                <S.PlaylistOwner>{playlist.owner.display_name}</S.PlaylistOwner>
              </S.Playlist>
            </Link>
          );
        })}
      </S.Playlists>
    </S.Container>
  );
};
