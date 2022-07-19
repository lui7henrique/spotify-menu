import { StyledAvatar, StyledFallback, StyledImage } from "./stitches";
import Stitches from "@stitches/react";

type AvatarProps = {
  src: string;
  alt: string;
} & Stitches.ComponentProps<typeof StyledAvatar>;

export const Avatar = (props: AvatarProps) => {
  const { src, alt, ...styledAvatarProps } = props;

  return (
    <StyledAvatar {...styledAvatarProps}>
      <StyledImage src={src} alt={alt} layout="fill" />
      <StyledFallback>{alt}</StyledFallback>
    </StyledAvatar>
  );
};
