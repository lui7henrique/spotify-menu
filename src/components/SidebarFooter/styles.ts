import styled from "styled-components";

export const SidebarFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
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
