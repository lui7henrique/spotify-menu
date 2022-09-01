import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints["sm"]}) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};

  position: relative;

  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 4px;
`;

export const TrackIndex = styled.span`
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

  z-index: 99;
`;

export const TrackThumbnail = styled.figure`
  min-width: 30%;
  aspect-ratio: 1;

  position: relative;
`;

export const TrackInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};

  width: 100%;
`;

export const TrackTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["md"]};
`;

export const TrackArtist = styled.sub`
  font-size: ${({ theme }) => theme.fontSizes["xs"]};
`;
