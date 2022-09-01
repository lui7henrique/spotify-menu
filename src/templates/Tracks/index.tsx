import { ArtistsList } from "components/ArtistsList";

import { Tab, Tabs } from "components/Tabs";
import { TracksList } from "components/TracksList";
import { useFetch } from "hooks/useFetch";
import { useMemo } from "react";
import { GetTopArtists } from "types/getTopArtists";
import { GetTopTracks } from "types/getTopTracks";

import * as S from "./styles";

export const TracksTemplate = () => {
  const { data: shortTerm, isLoading: shortTermIsLoading } =
    useFetch<GetTopTracks>(["shortTerm"], "next", "/me/top/tracks", {
      params: {
        time_range: "short_term",
        limit: 50,
      },
    });

  const { data: mediumTerm, isLoading: mediumTermIsLoading } =
    useFetch<GetTopTracks>(["mediumTerm"], "next", "/me/top/tracks", {
      params: {
        time_range: "medium_term",
        limit: 50,
      },
    });

  const { data: longTerm, isLoading: longTermIsLoading } =
    useFetch<GetTopTracks>(["longTerm"], "next", "/me/top/tracks", {
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
          <TracksList
            tracks={shortTerm?.items}
            isLoading={shortTermIsLoading}
          />
        ),
      },
      {
        key: "medium-term",
        label: "6 Months",
        panel: (
          <TracksList
            tracks={mediumTerm?.items}
            isLoading={mediumTermIsLoading}
          />
        ),
      },
      {
        key: "long-term",
        label: "All time",
        panel: (
          <TracksList tracks={longTerm?.items} isLoading={longTermIsLoading} />
        ),
      },
    ];
  }, [
    shortTerm,
    mediumTerm,
    longTerm,

    shortTermIsLoading,
    mediumTermIsLoading,
    longTermIsLoading,
  ]);

  console.log({ shortTerm, mediumTerm, longTerm });

  return (
    <S.Container>
      <Tabs tabs={tabs} />
    </S.Container>
  );
};
