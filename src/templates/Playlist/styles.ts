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
