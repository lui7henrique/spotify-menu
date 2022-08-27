import { ReactNode } from "react";

import * as S from "./styles";
import { Header } from "components/Header";
import Head from "next/head";

type LayoutDefaultProps = {
  title: string;
  children: ReactNode;
};

export const LayoutDefault = (props: LayoutDefaultProps) => {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>Spotify - {title}</title>
      </Head>

      <S.Container>
        <S.Main>
          <Header />
          <S.Content>{children}</S.Content>
        </S.Main>
      </S.Container>
    </>
  );
};
