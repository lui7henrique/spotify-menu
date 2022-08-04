import Image from "next/image";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 30vw;
  min-width: 400px;
  padding: ${({ theme }) => theme.space[8]};
  height: 100%;

  border-left-color: ${({ theme }) => theme.colors.gray800};

  background-color: ${({ theme }) => theme.colors.gray1000};

  border-left-width: 1px;
  border-left-style: solid;
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

export const SidebarContent = styled.main`
  width: 100%;
`;

export const SidebarContentTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

export const SidebarContentTrackImageWrapper = styled.figure`
  width: 100%;
  aspect-ratio: 1;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    124deg,
    rgba(0, 0, 0, 0.5858718487394958) 0%,
    rgba(0, 0, 0, 0.9444152661064426) 61%
  );

  border: 1px dashed ${({ theme }) => theme.colors.gray600};

  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const SidebarContentTrackImageWrapperMessage = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  user-select: none;
`;

export const SidebarContentTrackImage = styled(Image)``;

export const SidebarContentTrackInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  gap: ${({ theme }) => theme.space[2]};
`;

export const SidebarContentTrackName = styled.h3`
  text-align: center;
`;

export const SidebarContentTrackArtist = styled.p`
  text-align: center;
`;

export const SidebarFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`;

export const SidebarFooterTrackController = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  width: 100%;
`;

export const SidebarFooterTrackTime = styled.sub``;

export const SidebarFooterTrackTimer = styled.div`
  width: 100%;
  height: 3px;

  background: ${({ theme }) => theme.colors.gray600};
  border-radius: 5px;
`;

export const SidebarFooterTrackTimerFilled = styled.div`
  width: 1%;
  height: 100%;

  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 5px;

  position: relative;
`;

export const SidebarFooterTrackTimerFilledController = styled.div`
  position: absolute;
  right: 0;
  top: -4px;

  width: 10px;
  height: 10px;

  background: ${({ theme }) => theme.colors.gray50};
  border-radius: 50%;

  cursor: pointer;
`;

export const SidebarFooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

export const SidebarFooterAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.space[2]};

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  border-radius: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;

export const SidebarFooterMainAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.space[2]};

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.green400};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green600};
  }
`;
