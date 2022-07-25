import Image from "next/image";
import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.space["16"]};
  height: ${({ theme }) => theme.space["16"]};
`;

export const AvatarWrapper = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

export const Avatar = styled(Image)``;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.green500};

  padding: ${({ theme }) => theme.space["2"]};

  position: absolute;
  bottom: 0;
  right: 0;

  aspect-ratio: 1;
  border: none;
  border-radius: 50%;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green600};
  }
`;
