import { FaSpotify } from "react-icons/fa";
import * as S from "./styles";

export const Logo = () => {
  return (
    <S.LogoContainer>
      <FaSpotify color="#fff" size={24} />
      <S.LogoTitle>Spotify</S.LogoTitle>
    </S.LogoContainer>
  );
};
