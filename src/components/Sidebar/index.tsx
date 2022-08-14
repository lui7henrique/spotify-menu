import { useTheme } from "styled-components";

import { usePlayer } from "contexts/PlayerContext";
import { FaHeadphones } from "react-icons/fa";

import { SidebarFooter } from "../SidebarFooter";

import * as S from "./styles";

export const Sidebar = () => {
  const { colors } = useTheme();

  const { currentPlayer } = usePlayer();
  const { track } = currentPlayer;

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

        <SidebarFooter />
      </S.SidebarContainer>
    </>
  );
};
