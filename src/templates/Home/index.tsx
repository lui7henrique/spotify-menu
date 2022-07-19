import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import * as Stitches from "./stitches";

import { SiSpotify } from "react-icons/si";

export const HomeTemplate = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <Stitches.Container>
        <Button
          label="Login w/ Spotify"
          onClick={() => signIn("spotify")}
          size="lg"
          leftIcon={SiSpotify}
        />
      </Stitches.Container>
    );
  }

  return (
    <Stitches.Container>
      <Stitches.Profile>
        <Avatar
          src={session.user.image}
          alt={session.user.name}
          onClick={() => console.log("oi")}
          size="xl"
        />

        <Stitches.ProfileInfos>
          <Stitches.ProfileBasicInfos>
            <Stitches.ProfileName>{session.user.name}</Stitches.ProfileName>
            <Stitches.ProfileEmail>{session.user.email}</Stitches.ProfileEmail>
          </Stitches.ProfileBasicInfos>

          <Button label="Logout" onClick={() => signOut()} size="xs" />
        </Stitches.ProfileInfos>
      </Stitches.Profile>
    </Stitches.Container>
  );
};
