import { Button } from "components/Button";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

import { SiSpotify } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const HomeTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const login = useCallback(async () => {
    await signIn("spotify", { redirect: false });
  }, []);

  if (!session) {
    return (
      <div>
        <button onClick={login}>Login w/ Spotify</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => push("/profile")}>Ver meu perfil</button>
    </div>
  );
};
