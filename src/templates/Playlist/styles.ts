import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div``;

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Header = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;

  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[14]} ${({ theme }) => theme.space[8]};

  background: ${({ theme }) => theme.colors.gray1000};
`;

/*
|-----------------------------------------------------------------------------
| Playlist
|-----------------------------------------------------------------------------
|
|
*/

export const PlaylistImageWrapper = styled.figure`
  width: 20%;
  aspect-ratio: 1;
  position: relative;

  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
`;

export const PlaylistImage = styled(Image)`
  object-fit: cover;
`;

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.space[8]};
  gap: ${({ theme }) => theme.space[1]};
`;

export const PlaylistDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

export const Subtitle = styled.h6`
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
`;

export const Description = styled.p``;

/*
|-----------------------------------------------------------------------------
| PlayButton
|-----------------------------------------------------------------------------
|
|
*/

export const PlayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green500};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.space[4]};
  margin: 0 ${({ theme }) => theme.space[8]};
  margin-top: -24px;

  border-radius: 50%;

  border: none;
  outline: none;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green600};
  }
`;

/*
|-----------------------------------------------------------------------------
| Tracks
|-----------------------------------------------------------------------------
|
|
*/

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

/*
|-----------------------------------------------------------------------------
| Track
|-----------------------------------------------------------------------------
|
|
*/

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
    .track_index {
      display: none;
    }

    .track_play {
      display: flex;
    }
  }
`;

export const TrackIndex = styled.h3`
  width: 2%;

  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes["md"]};
`;

export const TrackPlay = styled.div`
  width: 2%;
  cursor: pointer;

  &.track_play {
    display: none;
  }
`;

export const TrackBaseInfos = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  width: 45%;
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

export const TrackName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["md"]};
  font-weight: 500;
`;

export const TrackArtist = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
  font-weight: 400;
`;

export const TrackAlbum = styled.div`
  width: 20%;
`;

export const TrackDate = styled.div`
  width: 20%;
`;

export const TrackTime = styled.div`
  width: 5%;
`;

export const TrackDetail = styled.p`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
`;
