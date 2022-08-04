import { usePlayer } from "contexts/PlayerContext";
import { FaHeadphones } from "react-icons/fa";
import {
  MdOutlineRepeat,
  MdPause,
  MdPlayArrow,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

import { useTheme } from "styled-components";
import { convertDurationToTimeString } from "utils/secondsToMinutes";
import * as S from "./styles";

export const Sidebar = () => {
  const { colors } = useTheme();

  const { currentPlayer, dispatch } = usePlayer();
  const { duration, track, isPlaying } = currentPlayer;

  return (
    <>
      <S.SidebarContainer>
        <S.SidebarHeader>
          <FaHeadphones color={colors.green400}></FaHeadphones>
          Playing now
        </S.SidebarHeader>

        <S.SidebarContent>
          <S.SidebarContentTrack>
            <S.SidebarContentTrackImageWrapper>
              {track ? (
                <S.SidebarContentTrackImage
                  src={track.album.images[0].url}
                  layout="fill"
                />
              ) : (
                <S.SidebarContentTrackImageWrapperMessage>
                  Select a track or playlist to play
                </S.SidebarContentTrackImageWrapperMessage>
              )}
            </S.SidebarContentTrackImageWrapper>

            {track && (
              <S.SidebarContentTrackInfos>
                <S.SidebarContentTrackName>
                  {track.name}
                </S.SidebarContentTrackName>

                <S.SidebarContentTrackArtist>
                  {track.artists.map((a) => a.name).join(", ")}
                </S.SidebarContentTrackArtist>
              </S.SidebarContentTrackInfos>
            )}
          </S.SidebarContentTrack>
        </S.SidebarContent>

        <S.SidebarFooter>
          <S.SidebarFooterTrackController>
            <S.SidebarFooterTrackTime>00:00</S.SidebarFooterTrackTime>
            <S.SidebarFooterTrackTimer>
              <S.SidebarFooterTrackTimerFilled>
                <S.SidebarFooterTrackTimerFilledController />
              </S.SidebarFooterTrackTimerFilled>
            </S.SidebarFooterTrackTimer>

            <S.SidebarFooterTrackTime>
              {duration ? convertDurationToTimeString(duration) : "00:00"}
            </S.SidebarFooterTrackTime>
          </S.SidebarFooterTrackController>

          <S.SidebarFooterActions>
            <S.SidebarFooterAction>
              <MdShuffle size={24} />
            </S.SidebarFooterAction>

            <S.SidebarFooterAction>
              <MdSkipPrevious size={24} />
            </S.SidebarFooterAction>

            <S.SidebarFooterMainAction
              onClick={
                isPlaying
                  ? () => dispatch({ type: "PAUSE" })
                  : () => dispatch({ type: "PLAY" })
              }
            >
              {isPlaying ? (
                <MdPause size={24} color="#000" />
              ) : (
                <MdPlayArrow size={24} color="#000" />
              )}
            </S.SidebarFooterMainAction>

            <S.SidebarFooterAction>
              <MdSkipNext size={24} />
            </S.SidebarFooterAction>

            <S.SidebarFooterAction>
              <MdOutlineRepeat size={24} />
            </S.SidebarFooterAction>
          </S.SidebarFooterActions>
        </S.SidebarFooter>
      </S.SidebarContainer>
    </>
  );
};
