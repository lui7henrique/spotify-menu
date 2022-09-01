import { ArtistsList } from "components/ArtistsList";
import { Banner } from "components/Banner";
import { Skeleton } from "components/Skeleton";
import { Tab, Tabs } from "components/Tabs";
import { useFetch } from "hooks/useFetch";
import { useMemo } from "react";
import { GetTopArtists } from "types/getTopArtists";

import * as S from "./styles";

export const ArtistsTemplate = () => {
  const { data: shortTerm, isLoading: shortTermIsLoading } =
    useFetch<GetTopArtists>(["short_term"], "next", "/me/top/artists", {
      params: {
        time_range: "short_term",
        limit: 50,
      },
    });

  const { data: mediumTerm, isLoading: mediumTermIsLoading } =
    useFetch<GetTopArtists>(["mediumTerm"], "next", "/me/top/artists", {
      params: {
        time_range: "medium_term",
        limit: 50,
      },
    });

  const { data: longTerm, isLoading: longTermIsLoading } =
    useFetch<GetTopArtists>(["longTerm"], "next", "/me/top/artists", {
      params: {
        time_range: "long_term",
        limit: 50,
      },
    });

  const tabs = useMemo((): Tab[] => {
    return [
      {
        key: "short-term",
        label: "4 Weeks",
        panel: (
          <ArtistsList
            artists={shortTerm?.items}
            isLoading={shortTermIsLoading}
          />
        ),
      },
      {
        key: "medium-term",
        label: "6 Months",
        panel: (
          <ArtistsList
            artists={mediumTerm?.items}
            isLoading={mediumTermIsLoading}
          />
        ),
      },
      {
        key: "long-term",
        label: "All time",
        panel: (
          <ArtistsList
            artists={longTerm?.items}
            isLoading={longTermIsLoading}
          />
        ),
      },
    ];
  }, [shortTerm, mediumTerm, longTerm, mediumTermIsLoading, longTermIsLoading]);

  return (
    <S.Container>
      <Tabs tabs={tabs} />
    </S.Container>
  );
};
