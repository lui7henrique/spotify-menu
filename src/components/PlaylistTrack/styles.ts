import Image from "next/image";
import styled, { css } from "styled-components";

export const Track = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.space[3]};

  border-radius: 4px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  &:hover {
    .spinner {
      display: none;
    }

    .track_index {
      display: none;
    }

    .track_button {
      display: flex;
    }
  }
`;

export const TrackSpinner = styled.div`
  width: 5%;
`;

export const TrackBaseInfos = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  width: 45%;
`;

export const TrackIndex = styled.sub`
  width: 5%;

  padding-left: 4px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes["md"]};
`;

export const TrackButton = styled.div<{
  isDisabled?: boolean;
}>`
  width: 5%;
  cursor: pointer;

  &.track_button {
    display: none;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

export const TrackImageWrapper = styled.figure`
  width: 50px;
  aspect-ratio: 1;
  position: relative;

  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
`;

export const TrackImage = styled(Image)`
  object-fit: cover;
`;

export const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};

  justify-content: flex-end;
`;

export const TrackName = styled.h2<{ isPlaying: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes["md"]};
  font-weight: 500;

  color: ${({ theme, isPlaying }) =>
    isPlaying ? theme.colors.green400 : theme.colors.gray50};
`;

export const TrackArtist = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
  font-weight: 400;
`;

export const TrackAlbum = styled.div`
  width: 20%;
`;

export const TrackDetail = styled.p`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
`;

export const TrackDate = styled.div`
  width: 20%;
`;

export const TrackTime = styled.div`
  width: 5%;
`;

export const TracksHeader = styled.div`
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray600};
  border-bottom-style: solid;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.space[3]};
`;

export const TrackHeaderInfo = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
  font-weight: 500;
  text-transform: uppercase;
`;
