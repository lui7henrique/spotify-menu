import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};

  padding: ${({ theme }) => theme.space[4]};

  height: ${({ theme }) => theme.components.main.height};
  overflow-y: auto;
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
