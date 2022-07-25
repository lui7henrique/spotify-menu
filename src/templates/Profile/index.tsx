import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import { Logo } from "components/Logo";

import { FaChartBar } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { Playlists } from "./Playlists";

import * as S from "./styles";

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
              </>
            )}
          </S.Profile>
        </S.Header>
      </S.Main>

      <S.Sidebar></S.Sidebar>
    </S.Container>
  );
};
