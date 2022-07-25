import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`;

export const LogoTitle = styled.h1`
  font-size: 24px;
`;
