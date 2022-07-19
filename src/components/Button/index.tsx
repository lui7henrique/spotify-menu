import { StyledButton } from "./stitches";
import Stitches from "@stitches/react";

type ButtonProps = {
  label: string;
  rightIcon?: any;
  leftIcon?: any;
} & Stitches.ComponentProps<typeof StyledButton>;

export const Button = (props: ButtonProps) => {
  const {
    label,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    ...styledButtonProps
  } = props;

  return (
    <StyledButton {...styledButtonProps}>
      {LeftIcon && <LeftIcon />}
      {label}
      {RightIcon && <RightIcon />}
    </StyledButton>
  );
};
