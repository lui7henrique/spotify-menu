import styled from "styled-components";

export const Container = styled.main``;

export const Title = styled.h1``;

export const Playlists = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.space[4]};
`;
