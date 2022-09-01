import styled, { keyframes } from "styled-components";

type SkeletonProps = {
  height?: number | string;
  width?: number | string;
  square?: boolean;
};

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div<SkeletonProps>`
  display: inline-block;
  height: ${(props) => props.height || "14px"};
  width: ${(props) => props.width || "80%"};

  background: #121214;
  background-image: linear-gradient(
    to right,
    #121214 0%,
    #171719 20%,
    #121214 40%,
    #121214 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 2s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  border-radius: ${({ square }) => (square ? "0px" : "4px")};
`;

export const PictureSkeleton = styled(Skeleton)`
  margin-bottom: 16px;
  width: 100%;
  height: 100%;
  margin: auto;

  display: block;
`;
