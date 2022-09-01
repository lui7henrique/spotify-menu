import { PictureSkeleton, Skeleton } from "components/Skeleton";
import Image from "next/image";
import { Track } from "types/getTopTracks";

import * as S from "./styles";

type TracksListProps = {
  tracks?: Track[];
  isLoading: boolean;
};

export const TracksList = (props: TracksListProps) => {
  const { tracks, isLoading } = props;

  if (isLoading) {
    return (
      <S.Container>
        {Array.from({ length: 20 }).map((_, index) => {
          return (
            <S.Track>
              <S.TrackIndex>{String(index + 1).padStart(2, "0")}</S.TrackIndex>

              <S.TrackThumbnail>
                <PictureSkeleton square />
              </S.TrackThumbnail>

              <S.TrackInfos>
                <S.TrackTitle>
                  <Skeleton width="80%" height="16px" />
                </S.TrackTitle>

                <S.TrackArtist>
                  <Skeleton width="50%" height="16px" />
                </S.TrackArtist>
              </S.TrackInfos>
            </S.Track>
          );
        })}
      </S.Container>
    );
  }

  return (
    <S.Container>
      {tracks?.map((track, index) => {
        const { album, artists, name } = track;

        const stringArtists = artists.map((artist) => artist.name).join(", ");

        const thumbnail = album.images[0].url;

        return (
          <S.Track>
            <S.TrackIndex>{String(index + 1).padStart(2, "0")}</S.TrackIndex>

            <S.TrackThumbnail>
              <Image src={thumbnail} alt={name} layout="fill" />
            </S.TrackThumbnail>

            <S.TrackInfos>
              <S.TrackTitle>{name}</S.TrackTitle>
              <S.TrackArtist>{stringArtists}</S.TrackArtist>
            </S.TrackInfos>
          </S.Track>
        );
      })}
    </S.Container>
  );
};
