import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

type Variant = "primary";

export type ButtonProps = {
  label: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { label, variant, ...buttonProps } = props;

  return (
    <S.ButtonContainer variant="primary" {...buttonProps}>
      {label}
    </S.ButtonContainer>
  );
};
