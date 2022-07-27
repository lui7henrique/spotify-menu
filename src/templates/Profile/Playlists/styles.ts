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
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.space[4]};
`;

export const Playlist = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.gray800};

  padding: ${({ theme }) => theme.space[4]};
`;
