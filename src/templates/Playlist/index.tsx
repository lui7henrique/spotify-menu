import { Playlist } from "types/getPlaylist";

import { MdPlayArrow } from "react-icons/md";
import { PlaylistTrack, PlaylistTrackHeader } from "components/PlaylistTrack";

import * as S from "./styles";

export type PlaylistTemplateProps = {
  playlist: Playlist;
};

export const PlaylistTemplate = (props: PlaylistTemplateProps) => {
  const { playlist } = props;

  return (
    <S.Container>
      <S.Header>
        <S.PlaylistImageWrapper>
          <S.PlaylistImage src={playlist.images[0].url} layout="fill" />
        </S.PlaylistImageWrapper>
        <S.PlaylistDetails>
          <S.Subtitle>Playlist</S.Subtitle>
          <S.Title>{playlist.name}</S.Title>

          <S.Description
            dangerouslySetInnerHTML={{
              __html: playlist.description,
            }}
          />
        </S.PlaylistDetails>
      </S.Header>

      <S.PlayButton>
        <MdPlayArrow size={32} />
      </S.PlayButton>

      <S.Playlist>
        <PlaylistTrackHeader />
        {playlist.tracks.items.map((item, index) => (
          <PlaylistTrack item={item} index={index} />
        ))}
      </S.Playlist>
    </S.Container>
  );
};
