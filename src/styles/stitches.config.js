import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      green400: "#1ed760",
      green500: "#1db954",
      green600: "#138039",
      green700: "#0d5928",

      gray50: "#FFFFFF",
      gray100: "#B3B3B3",
      gray700: "#3d3d3d",
      gray800: "#1f1f1f",
      gray900: "#121212",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    // sm: (rule) => `@media (max-width: 512px) { ${rule} }`,
    // md: (rule) => `@media (max-width: 768px) { ${rule} }`,
    // lg: (rule) => `@media (max-width: 1024px) { ${rule} }`,
    // xl: (rule) => `@media (max-width: 1440px) { ${rule} }`,

    sm: "(width < 720px)",
    md: "(720px <= width < 1024px)",
    lg: "(1024px <= width < 1536px)",
    xl: "(1536px <= width)",
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Raleway, serif",
  },
  body: {
    background: "$gray900",
    color: "$gray100",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "$gray50",
  },
  "*::-webkit-scrollbar": {
    width: "3px",
  },
  "*::-webkit-scrollbar-track": {
    background: "$gray$gray800",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "$colors$gray700",
    borderRadius: "20px",
    border: "3px solid $colors$gray700",
  },
});
