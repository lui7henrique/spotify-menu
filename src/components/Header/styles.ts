import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.components.header.height};

  /* border-bottom-color: ${({ theme }) => theme.colors.gray800};
  border-bottom-width: 1px;
  border-bottom-style: solid; */

  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
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
  font-size: 16px;
`;

export const ProfileEmail = styled.p`
  font-size: 12px;
`;

export const ProfileLogout = styled.sub`
  font-size: 12px;
  margin-top: 10px;
`;
