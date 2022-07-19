import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
});

export const Profile = styled("div", {
  display: "flex",
  gap: "$space$3",
});

export const ProfileInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const ProfileName = styled("h1", {
  fontSize: "$fontSizes$6",
});

export const ProfileEmail = styled("p", {
  fontSize: "$fontSizes$3",
});
