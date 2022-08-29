import { ArtistsList } from "components/ArtistsList";
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
      },
    }
  );

  const { data: mediumTerm } = useFetch<GetTopArtists>(
    ["mediumTerm"],
    "next",
    "/me/top/artists",
    {
      params: {
        time_range: "medium_term",
      },
    }
  );

  const { data: longTerm } = useFetch<GetTopArtists>(
    ["longTerm"],
    "next",
    "/me/top/artists",
    {
      params: {
        time_range: "long_term",
      },
    }
  );

  return (
    <S.Container>
      <ArtistsList
        artists={shortTerm?.items}
        title="Top artists"
        subtitle="in short term (last 4 weeks)"
      />

      <ArtistsList
        artists={mediumTerm?.items}
        title="Top artists"
        subtitle="in medium term (last 6 months)"
      />

      <ArtistsList
        artists={longTerm?.items}
        title="Top artists"
        subtitle="in long term (all time)"
      />
    </S.Container>
  );
};
