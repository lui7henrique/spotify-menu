import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};

  padding: ${({ theme }) => theme.space[4]};
`;

export const Title = styled.h1``;

export const Playlists = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.space[8]};
`;

export const Playlist = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.gray800};

  padding: ${({ theme }) => theme.space[4]};
`;

export const PlaylistImageWrapper = styled.figure`
  width: 100%;
  aspect-ratio: 1/1;

  position: relative; // to next image
`;

export const PlaylistImage = styled(Image)`
  object-fit: cover;
`;
