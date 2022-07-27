import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import { Logo } from "components/Logo";

import { RiLogoutBoxLine } from "react-icons/ri";

import * as S from "./styles";
import { Avatar } from "components/Avatar";
import { Playlists } from "./Playlists";

export const ProfileTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const logout = useCallback(async () => {
    await push("/");
    await signOut({ redirect: false });
  }, []);

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <Logo />

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

        <Playlists />
      </S.Main>

      <S.Sidebar></S.Sidebar>
    </S.Container>
  );
};
