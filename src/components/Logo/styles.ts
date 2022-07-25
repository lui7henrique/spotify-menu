import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

export const LogoContent = styled.div``;

export const LogoTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`;

export const LogoSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
`;
