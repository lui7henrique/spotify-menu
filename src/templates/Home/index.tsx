import { Button } from "components/Button";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

import { SiSpotify } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import { useRouter } from "next/router";
import { useCallback } from "react";

import * as Stitches from "./stitches";
import { ProfileTemplate } from "templates/Profile";

export const HomeTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const login = useCallback(async () => {
    await signIn("spotify", { redirect: false });
  }, []);

  if (!session) {
    return (
      <Stitches.Container>
        <Button
          label="Login w/ Spotify"
          size="lg"
          onClick={login}
          leftIcon={SiSpotify}
        />
      </Stitches.Container>
    );
  }

  return (
    <Stitches.Container>
      <Button
        label="Ver meu perfil"
        size="lg"
        onClick={() => push("/profile")}
        leftIcon={FiHeadphones}
      />
    </Stitches.Container>
  );
};
