import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import {
  CurrentPlayer,
  PlayerAction,
  PlayerActionType,
  PlayerContextProviderProps,
  PlayerContextType,
} from "./types";

export const PlayerContext = createContext({} as PlayerContextType);

export const PlayerContextProvider = (props: PlayerContextProviderProps) => {
  const { children } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  const initialPlayer = useMemo((): CurrentPlayer => {
    return {
      track: null,
      isPlaying: false,
      duration: null,
    };
  }, []);

  const reducer = useCallback(
    (currentPlayer: CurrentPlayer, action: PlayerAction) => {
      const actions: Record<PlayerActionType, CurrentPlayer> = {
        CHANGE_TRACK: {
          ...currentPlayer,
          track: action.payload?.track,
          isPlaying: true,
        },
        CLEAR: {
          ...currentPlayer,
          track: null,
        },
        PLAY: {
          ...currentPlayer,
          isPlaying: true,
        },
        PAUSE: {
          ...currentPlayer,
          isPlaying: false,
        },
        UPDATE_TIME: {
          ...currentPlayer,
          duration: action.payload?.duration,
        },
      };

      return actions[action.type];
    },
    []
  );

  const [currentPlayer, dispatch] = useReducer(reducer, initialPlayer);

  useEffect(() => {
    if (currentPlayer.track) {
      if (currentPlayer.isPlaying) {
        audioRef.current.play();
      }

      if (!currentPlayer.isPlaying) {
        audioRef.current.pause();
      }
    }
  }, [currentPlayer.track, currentPlayer.isPlaying]);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05;

      dispatch({
        type: "UPDATE_TIME",
        payload: { duration: Number(audioRef.current.duration.toFixed(0)) },
      });
    }
  };

  return (
    <PlayerContext.Provider value={{ currentPlayer, dispatch, audioRef }}>
      {currentPlayer.track && (
        <audio
          src={currentPlayer.track.preview_url}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />
      )}
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const value = useContext(PlayerContext);

  if (!value) {
    throw new Error("Player context must be provided");
  }

  return value;
};
