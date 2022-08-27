import { Avatar } from "components/Avatar";
import { Logo } from "components/Logo";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

import * as S from "./styles";

export const Header = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const logout = useCallback(async () => {
    await push("/");
    await signOut({ redirect: false });
  }, []);

  return (
    <S.Header>
      <S.Menu>
        <Logo />
      </S.Menu>

      <S.Profile>
        {session?.user && (
          <>
            <S.ProfileInfos>
              <S.ProfileBasicInfos>
                <S.ProfileName>{session.user.name}</S.ProfileName>
                <S.ProfileEmail>{session.user.email}</S.ProfileEmail>
              </S.ProfileBasicInfos>
            </S.ProfileInfos>

            <Avatar
              src={session.user.image}
              iconButton={{
                icon: RiLogoutBoxLine,
                onClick: logout,
                position: "left-bottom",
                tooltip: "oi",
              }}
            />
          </>
        )}
      </S.Profile>
    </S.Header>
  );
};
