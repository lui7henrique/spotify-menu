import { SidebarTrackController } from "components/SidebarTrackController";
import { usePlayer } from "contexts/PlayerContext";
import { useEffect, useState } from "react";

import {
  MdOutlineRepeat,
  MdPause,
  MdPlayArrow,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { convertDurationToTimeString } from "utils/secondsToMinutes";

import * as S from "./styles";

export const SidebarFooter = () => {
  const { currentPlayer, dispatch } = usePlayer();
  const { isPlaying } = currentPlayer;

  return (
    <S.SidebarFooter>
      <SidebarTrackController />

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
  );
};
