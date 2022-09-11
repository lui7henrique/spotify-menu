import Aos from "aos";
import { PictureSkeleton, Skeleton } from "components/Skeleton";
import { useEffect } from "react";
import { Artist } from "types/getTopArtists";
import * as S from "./styles";

type ArtistsListProps = {
  artists?: Artist[];
  isLoading?: boolean;
};

export const ArtistsList = (props: ArtistsListProps) => {
  const { artists, isLoading } = props;

  if (isLoading) {
    return (
      <S.Container>
        <S.ArtistsList>
          {Array.from({ length: 50 }).map((_, index) => {
            return (
              <S.ArtistItem key={index}>
                <S.ArtistFigure>
                  <PictureSkeleton />
                </S.ArtistFigure>

                <S.ArtistIndex>
                  <Skeleton width="15px" height="16px" />
                </S.ArtistIndex>

                <S.ArtistInfos>
                  <Skeleton width="80%" height="16px" />
                </S.ArtistInfos>
              </S.ArtistItem>
            );
          })}
        </S.ArtistsList>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ArtistsList>
        {artists?.map((a, index) => {
          const { name, images, id } = a;

          return (
            <S.ArtistItem key={id}>
              <S.ArtistFigure>
                {images && (
                  <S.ArtistImage
                    src={images[1].url || images[0].url}
                    layout="fill"
                    draggable="false"
                  />
                )}
              </S.ArtistFigure>

              <S.ArtistIndex>
                {String(index + 1).padStart(2, "0")}.
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
