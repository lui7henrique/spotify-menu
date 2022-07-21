import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
});

export const Sidebar = styled("aside", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "300px",
  padding: "1rem",
  height: "100%",
  border: "1px solid $colors$gray800",
});

export const Profile = styled("div", {
  display: "flex",
  gap: "$space$3",
});

export const ProfileInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ProfileBasicInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const ProfileName = styled("h1", {
  fontSize: "$fontSizes$6",
});

export const ProfileEmail = styled("p", {
  fontSize: "$fontSizes$3",
});
