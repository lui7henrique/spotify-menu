import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    &:nth-child(even) {
      flex-direction: column;
    }

    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

export const BannerContainer = styled.aside`
  width: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: 100%;
  }
`;

export const ArtistsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[4]};

  padding: 0 ${({ theme }) => theme.space[4]};
  list-style: none;

  width: 70%;

  @media (max-width: ${({ theme }) => theme.breakpoints["lg"]}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

export const ArtistItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  align-items: center;
  border-radius: 4px;

  padding: ${({ theme }) => theme.space[4]};

  background: ${({ theme }) => theme.colors.gray800};

  position: relative;
`;

export const ArtistFigure = styled.figure`
  aspect-ratio: 1;
  width: 50px;
  position: relative;
  border-radius: 50%;

  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    width: 40px;
    position: relative;
  }
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

export const ArtistInfos = styled.div``;

export const ArtistName = styled.h4`
  font-size: 12px;
`;
