import { IconType } from "react-icons";
import Tooltip from "rc-tooltip";

import * as S from "./styles";

type AvatarProps = {
  src: string;
  iconButton?: {
    icon: IconType;
    onClick: () => void;
    position?: "right-top" | "right-bottom" | "left-top" | "left-bottom";
    tooltip?: string;
  };
};

export const Avatar = (props: AvatarProps) => {
  const { src, iconButton } = props;

  if (iconButton) {
    const {
      icon: Icon,
      onClick,
      position = "right-bottom",
      tooltip,
    } = iconButton;

    return (
      <S.AvatarContainer>
        <S.AvatarWrapper>
          <S.Avatar src={src} layout="fill" />
        </S.AvatarWrapper>

        {tooltip ? (
          <S.IconButton onClick={onClick}>
            <Icon size={12} color="white" />
          </S.IconButton>
        ) : (
          <S.IconButton onClick={onClick}>
            <Icon size={12} color="white" />
          </S.IconButton>
        )}
      </S.AvatarContainer>
    );
  }

  return (
    <S.AvatarWrapper>
      <S.Avatar src={src} layout="fill" />
    </S.AvatarWrapper>
  );
};
