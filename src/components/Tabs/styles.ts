import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 ${({ theme }) => theme.space[4]};
`;

export const TabsHeader = styled.nav`
  display: flex;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray800};
  width: 100%;
`;

type TabButtonProps = {
  isActive: boolean;
};

export const TabButton = styled.div<TabButtonProps>`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[4]};
  font-size: 14px;
  height: 100%;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${({ isActive }) =>
    isActive
      ? css`
          color: white;

          border-bottom-width: 2px;
          border-bottom-style: solid;
          border-bottom-color: ${({ theme }) => theme.colors.green400};
        `
      : css`
          &:hover {
            color: white;

            border-bottom-width: 2px;
            border-bottom-style: solid;
            border-bottom-color: ${({ theme }) => theme.colors.gray700};
          }
        `}
`;
