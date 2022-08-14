import { useCallback, useEffect, useState } from "react";

import { usePlayer } from "contexts/PlayerContext";

import { convertDurationToTimeString } from "utils/secondsToMinutes";

import * as S from "./styles";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const SidebarTrackController = () => {
  const {
    currentPlayer: { duration, track },
    audioRef,
  } = usePlayer();

  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const currentTime = audioRef.current?.currentTime;

      if (currentTime) {
        setCurrentTimeInSeconds(Number(currentTime.toFixed(0)));
      }
    }, 1000);
  }, [currentTimeInSeconds, track]);

  const handleSeek = useCallback((amount: number) => {
    audioRef.current.currentTime = amount;

    setCurrentTimeInSeconds(amount);
  }, []);

  return (
    <S.SidebarFooterTrackController>
      <S.SidebarFooterTrackTime>
        {currentTimeInSeconds
          ? convertDurationToTimeString(currentTimeInSeconds)
          : "00:00"}
      </S.SidebarFooterTrackTime>

      <S.Slider>
        <Slider
          trackStyle={{ backgroundColor: "#04d361", height: "3px" }}
          railStyle={{ backgroundColor: "#3d3d3d", height: "3px" }}
          handleStyle={{
            borderBlockColor: "#FFFFFF",
            borderWidth: 0,
            boxShadow: "none",
            width: "12px",
            height: "12px",
            marginTop: "-4px",
          }}
          onChange={handleSeek}
          max={duration}
          value={currentTimeInSeconds}
        />
      </S.Slider>

      <S.SidebarFooterTrackTime>
        {duration ? convertDurationToTimeString(duration) : "00:00"}
      </S.SidebarFooterTrackTime>
    </S.SidebarFooterTrackController>
  );
};
