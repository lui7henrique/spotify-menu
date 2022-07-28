import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};

  padding: ${({ theme }) => theme.space[8]};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`;

export const Playlists = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["xl"]}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["sm"]}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Playlist = styled.a`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.gray800};

  padding: ${({ theme }) => theme.space[4]};
  border-radius: 4px;

  cursor: pointer;
`;

export const PlaylistImageWrapper = styled.figure`
  width: 100%;
  aspect-ratio: 1/1;

  position: relative; // to next image
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
`;

export const PlaylistImage = styled(Image)`
  object-fit: cover;
`;

export const PlaylistNameContainer = styled.div`
  max-width: 100%;
  display: inline-block;
`;

export const PlaylistName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};

  margin-top: ${({ theme }) => theme.space["4"]};

  max-width: 150px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    max-width: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
    max-width: 100px;
  } ;
`;

export const PlaylistOwner = styled.sub``;
