import { Button } from "components/Button";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

import { SiSpotify } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import { useRouter } from "next/router";
import { useCallback } from "react";

import * as S from "./styles";

export const HomeTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const login = useCallback(async () => {
    await signIn("spotify", { redirect: false });
  }, []);

  if (!session) {
    return (
      <S.Container>
        <Button
          onClick={login}
          label="Login w/ Spotify"
          leftIcon={<SiSpotify size={20} />}
        />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Button
        label="Ver meu perfil"
        onClick={() => push("/profile/artists")}
        leftIcon={<FiHeadphones size={20} />}
      />
    </S.Container>
  );
};
