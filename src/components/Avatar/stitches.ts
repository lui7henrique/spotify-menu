import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "@stitches/react";
import Image from "next/image";

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  variants: {
    size: {
      xs: { width: 15, height: 15 },
      sm: { width: 30, height: 30 },
      md: { width: 45, height: 45 },
      lg: { width: 60, height: 60 },
      xl: { width: 80, height: 80 },
    },
  },
  defaultVariants: {
    size: "lg",
  },
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "100%",
  backgroundColor: "$colors$gray800",
  position: "relative",
});

export const StyledImage = styled(Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "$colors$green500",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});
