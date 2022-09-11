import { FaSpotify } from "react-icons/fa";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const Logo = () => {
  const {
    colors: { green500 },
  } = useTheme();

  return (
    <S.LogoContainer>
      <FaSpotify color={green500} size={32} />
    </S.LogoContainer>
  );
};
