import { Banner, BannerProps } from "components/Banner";
import { useMemo } from "react";
import { Artist } from "types/getTopArtists";
import * as S from "./styles";

type ArtistsListProps = {
  artists?: Artist[];
} & Pick<BannerProps, "subtitle" | "title">;

export const ArtistsList = (props: ArtistsListProps) => {
  const { artists, ...bannerProps } = props;

  const mosaic = useMemo(
    () =>
      artists?.map((i) => {
        return {
          label: i.name,
          src: i.images[0].url,
        };
      }),
    [artists]
  );

  return (
    <S.Container>
      <S.BannerContainer>
        <Banner mosaic={mosaic} {...bannerProps} />
      </S.BannerContainer>

      <S.ArtistsList>
        {artists?.map((a, index) => {
          const { name, images, genres } = a;

          return (
            <S.ArtistItem>
              <S.ArtistFigure>
                <S.ArtistImage
                  src={images[0].url}
                  layout="fill"
                  draggable="false"
                />
              </S.ArtistFigure>

              <S.ArtistIndex>
                {String(index + 1).padStart(2, "0")}
              </S.ArtistIndex>

              <S.ArtistInfos>
                <S.ArtistName>{name}</S.ArtistName>
              </S.ArtistInfos>
            </S.ArtistItem>
          );
        })}
      </S.ArtistsList>
    </S.Container>
  );
};
