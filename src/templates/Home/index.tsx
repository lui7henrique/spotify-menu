import { Avatar } from "components/Avatar";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import * as Stitches from "./stitches";

export const HomeTemplate = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <Stitches.Container>
        <button onClick={() => signIn("spotify")}>logar</button>
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
        />
        {/* <img src={session.user.image} alt="" /> */}

        <Stitches.ProfileInfos>
          <Stitches.ProfileName>{session.user.name}</Stitches.ProfileName>
          <Stitches.ProfileEmail>{session.user.email}</Stitches.ProfileEmail>
          <button onClick={() => signOut()}>logout</button>
        </Stitches.ProfileInfos>
      </Stitches.Profile>
    </Stitches.Container>
  );
};
