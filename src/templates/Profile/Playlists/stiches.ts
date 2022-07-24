import { styled as stitches } from "@stitches/react";
import styled from "styled-components";
import Image from "next/image";

export const PlaylistsListContainer = stitches("div", {
  height: "calc(100vh - 45px)",
  overflowY: "scroll",
});

export const PlaylistsTitle = stitches("h1", {
  fontSize: "1.5rem",
  paddingLeft: 20,
  paddingTop: 20,
});

export const PlaylistsList = styled.div`
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  gap: 16px;
  padding: 20;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Playlist = stitches("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: 20,
  backgroundColor: "$colors$gray800",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "$colors$gray700",
  },
});

export const PlaylistImageWrapper = stitches("figure", {
  aspectRatio: 1 / 1,
  width: "100%",
  position: "relative",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 8px 24px rgb(0 0 0 / 50%)",
});

export const PlaylistImage = stitches(Image, {
  objectFit: "cover",
});

export const TruncatedText = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PlaylistName = stitches(TruncatedText, {
  width: "100%",
  marginTop: 8,
  fontSize: "0.9rem",
});

export const PlaylistMusicsAccount = stitches("p", {});
