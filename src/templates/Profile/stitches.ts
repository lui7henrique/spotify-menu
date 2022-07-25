// import { styled } from "@stitches/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  padding: 1rem;
  height: 100%;

  border-left-color: #1f1f1f;
  border-left-width: 1px;
  border-left-style: solid;
`;

export const Profile = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileBasicInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.div`
  font-size: 16px;
`;

export const ProfileEmail = styled.div`
  font-size: 16px;
`;

export const Main = styled.div`
  width: 100%;
  height: 3rem;
`;
