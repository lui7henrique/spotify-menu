import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};

  padding-left: ${({ theme }) => theme.space[4]};
  border-left: 1px solid ${({ theme }) => theme.colors.gray800};

  height: 100%;
`;

type NavItemProps = {
  isActive: boolean;
};

export const NavItem = styled.a<NavItemProps>`
  transition: all 0.2s ease-in-out;
  padding: 0.2rem 0;
  cursor: pointer;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray50 : theme.colors.gray100};

  &::after {
    content: "";
    display: block;
    width: ${({ isActive }) => (isActive ? "100%" : 0)};

    height: 2px;
    background: ${({ theme }) => theme.colors.gray50};
    transition: width 0.2s;
    border-radius: 5px;
    margin-top: 2px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray50};
  }

  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`;
