import { Playlist } from "types/getPlaylist";
import { format } from "date-fns";

import * as S from "./styles";
import { millisToMinutesAndSeconds } from "utils/millisToMinutesAndSeconds";
import { FaPlay } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { usePlayer } from "contexts/PlayerContext";

export type PlaylistTemplateProps = {
  playlist: Playlist;
};

export const PlaylistTemplate = (props: PlaylistTemplateProps) => {
  const { playlist } = props;

  const { dispatch } = usePlayer();

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
        <S.TracksHeader>
          <S.TrackBaseInfos>
            <S.TrackPlay>
              <S.TrackHeaderInfo>#</S.TrackHeaderInfo>
            </S.TrackPlay>

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
                <S.TrackIndex className="track_index">{index + 1}</S.TrackIndex>

                <S.TrackPlay
                  className="track_play"
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_TRACK",
                      payload: { track: item.track },
                    })
                  }
                >
                  <FaPlay size={20} color="#FFF" />
                </S.TrackPlay>

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
