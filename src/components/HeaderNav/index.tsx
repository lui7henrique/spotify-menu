import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useRef } from "react";
import * as S from "./styles";

type NavItem = {
  label: string;
  href: string;
};

export const HeaderNav = () => {
  const { asPath } = useRouter();

  const navItems = useMemo(
    (): NavItem[] => [
      {
        href: "/profile/artists",
        label: "Artists",
      },
      {
        href: "/profile/tracks",
        label: "Tracks",
      },
      {
        href: "/profile/genres",
        label: "Genres",
      },
      {
        href: "/profile/albums",
        label: "Albums",
      },
    ],
    []
  );

  return (
    <S.Nav>
      {navItems.map((navItem) => {
        const isActive = asPath === navItem.href;

        return (
          <Link href={navItem.href} passHref>
            <S.NavItem isActive={isActive}>{navItem.label}</S.NavItem>
          </Link>
        );
      })}
    </S.Nav>
  );
};
