import { Button } from "components/Button";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

import { SiSpotify } from "react-icons/si";
import { useRouter } from "next/router";
import { useCallback } from "react";

import * as Stitches from "./stitches";

export const HomeTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const login = useCallback(async () => {
    await signIn("spotify", {
      redirect: false,
    });

    await push("/profile");
  }, []);

  if (!session) {
    return (
      <Stitches.Container>
        <Button
          label="Login w/ Spotify"
          onClick={login}
          size="lg"
          leftIcon={SiSpotify}
        />
      </Stitches.Container>
    );
  }

  return (
    <Stitches.Container>
      <Button
        label="Sair"
        onClick={() => signOut({ redirect: false })}
        size="lg"
        leftIcon={SiSpotify}
      />
    </Stitches.Container>
  );
};
