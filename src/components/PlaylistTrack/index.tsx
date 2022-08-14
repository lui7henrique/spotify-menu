import { usePlayer } from "contexts/PlayerContext";
import { format } from "date-fns";
import { useMemo } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { WaveSpinner } from "react-spinners-kit";
import { Item } from "types/getPlaylist";
import { millisToMinutesAndSeconds } from "utils/millisToMinutesAndSeconds";

import * as S from "./styles";

type PlaylistTrackProps = {
  item: Item;
  index: number;
};

export const PlaylistTrack = (props: PlaylistTrackProps) => {
  const {
    item: {
      added_at,
      track: { id, album, name, artists, duration_ms, preview_url },
    },
    index,
  } = props;

  const { dispatch, currentPlayer } = usePlayer();

  const stringArtists = useMemo(
    () => artists.map((a) => a.name).join(", "),
    [artists]
  );

  const addedDate = useMemo(
    () => format(new Date(added_at), "MMM dd, yyyy"),
    [added_at]
  );

  const isPlayingTrack = useMemo(() => {
    const isTrack = currentPlayer.track?.id === id;

    return isTrack && currentPlayer.isPlaying;
  }, [currentPlayer]);

  return (
    <S.Track>
      <S.TrackBaseInfos>
        {isPlayingTrack ? (
          <S.TrackSpinner className="spinner">
            <WaveSpinner color="#1ed760" size={10} />
          </S.TrackSpinner>
        ) : (
          <S.TrackIndex className="track_index">{index + 1}.</S.TrackIndex>
        )}

        {isPlayingTrack ? (
          <S.TrackButton
            className="track_button"
            onClick={() =>
              dispatch({
                type: "PAUSE",
              })
            }
            isDisabled={!preview_url}
          >
            <MdPause size={20} color="#FFF" />
          </S.TrackButton>
        ) : (
          <S.TrackButton
            className="track_button"
            onClick={() =>
              dispatch({
                type: "CHANGE_TRACK",
                payload: { track: props.item.track },
              })
            }
            isDisabled={!preview_url}
          >
            <MdPlayArrow size={20} color="#FFF" />
          </S.TrackButton>
        )}

        <S.TrackImageWrapper>
          <S.TrackImage src={album.images[0].url} layout="fill" />
        </S.TrackImageWrapper>

        <S.TrackDetails>
          <S.TrackName isPlaying={isPlayingTrack}>{name}</S.TrackName>
          <S.TrackArtist>{stringArtists}</S.TrackArtist>
        </S.TrackDetails>
      </S.TrackBaseInfos>

      <S.TrackAlbum>
        <S.TrackDetail>{album.name}</S.TrackDetail>
      </S.TrackAlbum>

      <S.TrackDate>
        <S.TrackDetail>{addedDate}</S.TrackDetail>
      </S.TrackDate>

      <S.TrackTime>
        <S.TrackDetail>{millisToMinutesAndSeconds(duration_ms)}</S.TrackDetail>
      </S.TrackTime>
    </S.Track>
  );
};

export const PlaylistTrackHeader = () => {
  return (
    <S.TracksHeader>
      <S.TrackBaseInfos>
        <S.TrackButton>
          <S.TrackHeaderInfo>#</S.TrackHeaderInfo>
        </S.TrackButton>

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
      </S.TrackTime>
    </S.TracksHeader>
  );
};
