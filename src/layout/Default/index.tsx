import { Avatar } from "components/Avatar";
import { Logo } from "components/Logo";
import { Sidebar } from "components/Sidebar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useCallback } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

import * as S from "./styles";

type LayoutDefaultProps = {
  children: ReactNode;
};

export const LayoutDefault = (props: LayoutDefaultProps) => {
  const { children } = props;

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

        <S.Content>{children}</S.Content>
      </S.Main>

      <Sidebar />
    </S.Container>
  );
};
