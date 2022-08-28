import { Banner } from "components/Banner";
import { useFetch } from "hooks/useFetch";
import { useMemo } from "react";
import { GetTopArtists } from "types/getTopArtists";

import * as S from "./styles";

export const ArtistsTemplate = () => {
  const { data: shortTerm } = useFetch<GetTopArtists>(
    ["short_term"],
    "next",
    "/me/top/artists",
    {
      params: {
        time_range: "short_term",
        limit: 50,
      },
    }
  );

  const shortTermMosaic = useMemo(
    () =>
      shortTerm?.items.map((i) => {
        return {
          label: i.name,
          src: i.images[0].url,
        };
      }),
    [shortTerm]
  );

  const { data: mediumTerm } = useFetch<GetTopArtists>(
    ["mediumTerm"],
    "next",
    "/me/top/artists",
    {
      params: {
        time_range: "medium_term",
        limit: 50,
      },
    }
  );

  const mediumTermMosaic = useMemo(
    () =>
      mediumTerm?.items.map((i) => {
        return {
          label: i.name,
          src: i.images[0].url,
        };
      }),
    [mediumTerm]
  );

  const { data: longTerm } = useFetch<GetTopArtists>(
    ["longTerm"],
    "next",
    "/me/top/artists",
    {
      params: {
        time_range: "long_term",
        limit: 50,
      },
    }
  );

  const longTermMosaic = useMemo(
    () =>
      longTerm?.items.map((i) => {
        return {
          label: i.name,
          src: i.images[0].url,
        };
      }),
    [longTerm]
  );

  return (
    <S.Container>
      <Banner
        title="Top artists"
        subtitle="in short term"
        mosaic={shortTermMosaic}
      />

      <div>
        <h1>Short term</h1>
        {shortTerm?.items.map((i) => {
          return <div>- {i.name}</div>;
        })}
      </div>

      <Banner
        title="Top artists"
        subtitle="in medium term"
        mosaic={mediumTermMosaic}
      />

      <div>
        <h1>Medium term</h1>
        {mediumTerm?.items.map((i) => {
          return <div>- {i.name}</div>;
        })}
      </div>

      <Banner
        title="Top artists"
        subtitle="in long term"
        mosaic={longTermMosaic}
      />

      <div>
        <h1>Long Term</h1>
        {longTerm?.items.map((i) => {
          return <div>- {i.name}</div>;
        })}
      </div>
    </S.Container>
  );
};
