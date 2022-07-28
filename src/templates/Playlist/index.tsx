import { Playlist } from "types/getPlaylist";
import { format } from "date-fns";

import * as S from "./styles";
import { millisToMinutesAndSeconds } from "utils/millisToMinutesAndSeconds";
import { FaPlay } from "react-icons/fa";

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
        <FaPlay size={20} />
      </S.PlayButton>

      <S.Playlist>
        <S.TracksHeader>
          <S.TrackBaseInfos>
            <S.TrackHeaderInfo>#</S.TrackHeaderInfo>
            <S.TrackHeaderInfo>Title</S.TrackHeaderInfo>
          </S.TrackBaseInfos>
          <S.TrackAlbum>
            <S.TrackHeaderInfo>Album</S.TrackHeaderInfo>
          </S.TrackAlbum>
          <S.TrackDate>
            <S.TrackHeaderInfo>Date added</S.TrackHeaderInfo>
          </S.TrackDate>
          <S.TrackTime>
            <S.TrackHeaderInfo>Time</S.TrackHeaderInfo>
          </S.TrackTime>{" "}
        </S.TracksHeader>

        {playlist.tracks.items.map((item, index) => {
          const { added_at } = item;
          const { album, name, artists, duration_ms } = item.track;

          const stringArtists = artists.map((a) => a.name).join(", ");

          const date = format(new Date(added_at), "MMM dd, yyyy");

          return (
            <S.Track>
              <S.TrackBaseInfos>
                <S.TrackIndex>{index + 1}</S.TrackIndex>
                <S.TrackImageWrapper>
                  <S.TrackImage src={album.images[0].url} layout="fill" />
                </S.TrackImageWrapper>
                <S.TrackDetails>
                  <S.TrackName>{name}</S.TrackName>
                  <S.TrackArtist>{stringArtists}</S.TrackArtist>
                </S.TrackDetails>
              </S.TrackBaseInfos>

              <S.TrackAlbum>
                <S.TrackDetail>{album.name}</S.TrackDetail>
              </S.TrackAlbum>

              <S.TrackDate>
                <S.TrackDetail>{date}</S.TrackDetail>
              </S.TrackDate>

              <S.TrackTime>
                <S.TrackDetail>
                  {millisToMinutesAndSeconds(duration_ms)}
                </S.TrackDetail>
              </S.TrackTime>
            </S.Track>
          );
        })}
      </S.Playlist>
    </S.Container>
  );
};
