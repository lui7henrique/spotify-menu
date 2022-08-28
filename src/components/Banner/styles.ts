import Image from "next/image";
import styled from "styled-components";

type ContainerProps = {
  src?: string;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray1000};
  aspect-ratio: 16 / 7;

  background-image: ${({ src }) => `url(${src})`};
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-color: ${({ theme }) => theme.colors.gray800};
  border-width: 1px;
  border-style: solid;

  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    aspect-ratio: 9 / 16;
  }
`;

export const Mosaic = styled.div`
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0px;
  padding: 0px;
  display: grid;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MosaicItem = styled.figure`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray800};

  position: relative;
  filter: brightness(0.15) blur(0.5px);
`;

export const MosaiItemImage = styled(Image)`
  object-fit: cover;
  transform: scale(1.1);
  user-select: none;
`;

export const BannerTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 300;

  z-index: 2;
`;

export const BannerSubtitle = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 200;

  z-index: 2;
`;
