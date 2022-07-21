import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { signOut, useSession } from "next-auth/react";
import * as Stitches from "./stitches";

import { RiLogoutBoxLine } from "react-icons/ri";
import { useCallback } from "react";
import { useRouter } from "next/router";

export const ProfileTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const logout = useCallback(async () => {
    await push("/");
    await signOut({ redirect: false });
  }, []);

  if (!session) {
    return <h1>carregando</h1>;
  }

  return (
    <Stitches.Container>
      <Stitches.Sidebar>
        {/* <Stitches.Profile>
          <Avatar src={session.user.image} alt={session.user.name} size="lg" />

          <Stitches.ProfileInfos>
            <Stitches.ProfileBasicInfos>
              <Stitches.ProfileName>{session.user.name}</Stitches.ProfileName>
              <Stitches.ProfileEmail>
                {session.user.email}
              </Stitches.ProfileEmail>
            </Stitches.ProfileBasicInfos>
          </Stitches.ProfileInfos>
        </Stitches.Profile> */}
        <Button
          label="Logout"
          onClick={logout}
          size="md"
          leftIcon={RiLogoutBoxLine}
        />
      </Stitches.Sidebar>

      <Stitches.Main></Stitches.Main>
    </Stitches.Container>
  );
};
