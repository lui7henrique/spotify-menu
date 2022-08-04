import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.components.header.height};

  padding: ${({ theme }) => theme.space[8]};

  border-bottom-color: ${({ theme }) => theme.colors.gray800};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  padding: ${({ theme }) => theme.space[8]};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileBasicInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints["md"]}) {
    display: none;
  }
`;

export const ProfileName = styled.h1`
  font-size: 20px;
`;

export const ProfileEmail = styled.p`
  font-size: 14px;
`;

export const ProfileLogout = styled.sub`
  font-size: 12px;
  margin-top: 10px;
`;

export const Main = styled.div`
  width: 100%;
  height: 3rem;
`;

export const Content = styled.main`
  height: ${({ theme }) => theme.components.main.height};
  overflow-y: auto;
`;
