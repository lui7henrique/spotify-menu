import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const Logo = () => {
  const {
    colors: { green500 },
  } = useTheme();

  return (
    <Link href="/profile">
      <S.LogoContainer>
        <FaSpotify color={green500} size={32} />

        <S.LogoContent>
          <S.LogoTitle>Spotify</S.LogoTitle>
          <S.LogoSubtitle>Explorer</S.LogoSubtitle>
        </S.LogoContent>
      </S.LogoContainer>
    </Link>
  );
};
