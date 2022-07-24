import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";

export const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: "1px solid $colors$gray800",
});

export const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  cursor: "pointer",
  fontFamily: "inherit",
  textTransform: "uppercase",
  color: "$colors$gray700",

  padding: "0 20px",

  height: 45,
  width: 300,

  display: "flex",
  gap: 8,
  alignItems: "center",
  justifyContent: "center",

  transition: "all 0.2s ease-in-out",

  fontSize: 12,
  fontWeight: "bolder",

  userSelect: "none",
  '&[data-state="active"]': {
    color: "$colors$green500",
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },

  "&:focus": { position: "relative" },
});

export const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
});
