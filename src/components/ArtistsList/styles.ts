import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ArtistsList = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["sm"]}) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

export const ArtistItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  align-items: center;
  border-radius: 4px;
  padding: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.gray800};
  position: relative;
`;

export const ArtistFigure = styled.figure`
  aspect-ratio: 1;
  width: 100%;
  position: relative;
  border-radius: 50%;

  overflow: hidden;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
`;

export const ArtistIndex = styled.sub`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: bold;
  color: white;

  padding: 4px;

  position: absolute;

  top: -6px;
  left: 8px;

  background: ${({ theme }) => theme.colors.gray700};

  border-radius: 0px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
`;

export const ArtistImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

export const ArtistInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const ArtistName = styled.h4`
  font-size: 14px;
  text-align: center;
`;
