import styled from "styled-components";

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  svg {
    transition: filter 0.2s ease-in-out;
  }

  &:hover {
    svg {
      filter: brightness(1.2);
    }
  }
`;

export const LogoContent = styled.div``;

export const LogoTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`;

export const LogoSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes["xs"]};
`;
