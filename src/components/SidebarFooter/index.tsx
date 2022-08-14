import { SidebarTrackController } from "components/SidebarTrackController";
import { usePlayer } from "contexts/PlayerContext";

import {
  MdOutlineRepeat,
  MdPause,
  MdPlayArrow,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

import * as S from "./styles";

export const SidebarFooter = () => {
  const { currentPlayer, dispatch } = usePlayer();
  const { isPlaying } = currentPlayer;

  return (
    <S.SidebarFooter>
      <SidebarTrackController />

      <S.SidebarFooterActions>
        <S.SidebarFooterAction isDisabled={!currentPlayer.track}>
          <MdShuffle size={24} />
        </S.SidebarFooterAction>

        <S.SidebarFooterAction isDisabled={!currentPlayer.track}>
          <MdSkipPrevious size={24} />
        </S.SidebarFooterAction>

        <S.SidebarFooterMainAction
          onClick={
            isPlaying
              ? () => dispatch({ type: "PAUSE" })
              : () => dispatch({ type: "PLAY" })
          }
          isDisabled={!currentPlayer.track}
        >
          {isPlaying ? (
            <MdPause size={24} color="#000" />
          ) : (
            <MdPlayArrow size={24} color="#000" />
          )}
        </S.SidebarFooterMainAction>

        <S.SidebarFooterAction isDisabled={!currentPlayer.track}>
          <MdSkipNext size={24} />
        </S.SidebarFooterAction>

        <S.SidebarFooterAction isDisabled={!currentPlayer.track}>
          <MdOutlineRepeat size={24} />
        </S.SidebarFooterAction>
      </S.SidebarFooterActions>
    </S.SidebarFooter>
  );
};
