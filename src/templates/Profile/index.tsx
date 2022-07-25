import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { Tabs, TabsProps } from "components/Tabs";
import * as Stitches from "./stitches";

import { FaChartBar } from "react-icons/fa";
import { RiLogoutBoxLine, RiPlayList2Fill } from "react-icons/ri";
import { Playlists } from "./Playlists";

export const ProfileTemplate = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const logout = useCallback(async () => {
    await push("/");
    await signOut({ redirect: false });
  }, []);

  const tabsProps = useMemo((): TabsProps => {
    return {
      tabs: [
        {
          content: <Playlists />,
          label: (
            <>
              <RiPlayList2Fill size={18} />
              Playlists
            </>
          ),
          value: "playlists",
        },
        {
          content: <h1>Gráficos</h1>,
          label: (
            <>
              <FaChartBar size={18} />
              Gráficos
            </>
          ),
          value: "charts",
        },
      ],
      ariaLabel: "Explore your account",
      defaultValue: "playlists",
    };
  }, []);

  return (
    <Stitches.Container>
      <Stitches.Main>
        <Tabs {...tabsProps} />
      </Stitches.Main>

      <Stitches.Sidebar>
        <Stitches.Profile>
          {session?.user && (
            <>
              <Avatar
                src={session.user.image}
                alt={session.user.name}
                size="lg"
              />

              <Stitches.ProfileInfos>
                <Stitches.ProfileBasicInfos>
                  <Stitches.ProfileName>
                    {session.user.name}
                  </Stitches.ProfileName>
                  <Stitches.ProfileEmail>
                    {session.user.email}
                  </Stitches.ProfileEmail>
                </Stitches.ProfileBasicInfos>
              </Stitches.ProfileInfos>
            </>
          )}
        </Stitches.Profile>

        <Button
          label="Logout"
          onClick={logout}
          size="md"
          leftIcon={RiLogoutBoxLine}
        />
      </Stitches.Sidebar>
    </Stitches.Container>
  );
};
