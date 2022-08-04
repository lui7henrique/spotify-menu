import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

import * as S from "./styles";

type Variant = "primary";

export type ButtonProps = {
  label: string;
  variant?: Variant;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { label, variant, rightIcon, leftIcon, ...buttonProps } = props;

  return (
    <S.ButtonContainer variant="primary" {...buttonProps}>
      <>
        {leftIcon}
        {label}
        {rightIcon}
      </>
    </S.ButtonContainer>
  );
};
