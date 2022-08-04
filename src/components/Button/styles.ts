import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const ButtonContainer = styled.button<Omit<ButtonProps, "label">>`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  border: none;
  cursor: pointer;
  border-radius: 24px;

  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.green500};
      color: ${({ theme }) => theme.colors.gray50};

      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSizes["sm"]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.green600};
      }
    `};
`;
