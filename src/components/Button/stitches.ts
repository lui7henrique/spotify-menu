import { styled } from "@stitches/react";

export const StyledButton = styled("button", {
  variants: {
    color: {
      green: {
        backgroundColor: "$green500",
        color: "$gray50",
        "&:hover": {
          backgroundColor: "$green400",
        },
      },
    },
    size: {
      xs: {
        padding: "0.3rem 0.6rem",
        fontSize: "10px",
        gap: "2px",
      },
      sm: {
        padding: "0.4rem 0.8rem",
        fontSize: "12px",
        gap: "4px",
      },
      md: {
        padding: "0.5rem 1rem",
        fontSize: "14px",
        gap: "6px",
      },
      lg: {
        padding: "0.6rem 1.2rem",
        fontSize: "16px",
        gap: "8px",
      },
    },
  },
  defaultVariants: {
    color: "green",
    size: "md",
  },
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "scale(1.01)",
  },
});
