import { Dispatch, MutableRefObject, ReactNode } from "react";
import { Track } from "types/getPlaylist";

export type PlayerContextProviderProps = {
  children: ReactNode;
};

export type PlayerContextType = {
  currentPlayer: CurrentPlayer;
  audioRef: MutableRefObject<HTMLAudioElement>;
  dispatch: Dispatch<PlayerAction>;
};

export type CurrentPlayer = {
  track?: Track;
  isPlaying: boolean;
  duration: number;
};

export type PlayerActionType =
  | "CHANGE_TRACK"
  | "CLEAR"
  | "PAUSE"
  | "PLAY"
  | "UPDATE_TIME";

export type PlayerAction = {
  type: PlayerActionType;
  payload?: {
    track?: Track;
    duration?: number;
  };
};
