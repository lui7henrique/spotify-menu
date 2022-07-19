import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { signOut, useSession } from "next-auth/react";
import * as Stitches from "./stitches";

export const ProfileTemplate = () => {
  const { data: session } = useSession();

  if (!session) {
    return <h1>carregando</h1>;
  }

  return (
    <Stitches.Container>
      <Stitches.Profile>
        <Avatar src={session.user.image} alt={session.user.name} size="xl" />

        <Stitches.ProfileInfos>
          <Stitches.ProfileBasicInfos>
            <Stitches.ProfileName>{session.user.name}</Stitches.ProfileName>
            <Stitches.ProfileEmail>{session.user.email}</Stitches.ProfileEmail>
          </Stitches.ProfileBasicInfos>

          <Button
            label="Logout"
            onClick={() =>
              signOut({
                redirect: false,
              })
            }
            size="xs"
          />
        </Stitches.ProfileInfos>
      </Stitches.Profile>
    </Stitches.Container>
  );
};
