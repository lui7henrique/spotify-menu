import * as S from "./styles";

export type BannerProps = {
  title?: string;
  subtitle?: string;
  src?: string;
  mosaic: Array<{
    src: string;
  }>;
};

export const Banner = (props: BannerProps) => {
  const { src, title, subtitle, mosaic } = props;

  return (
    <S.Container src={src}>
      <S.BannerTitle>{title}</S.BannerTitle>
      <S.BannerSubtitle>{subtitle}</S.BannerSubtitle>

      {mosaic && (
        <S.Mosaic>
          {mosaic.slice(0, 9).map((i) => {
            const { src } = i;

            return (
              <S.MosaicItem key={src}>
                <S.MosaiItemImage src={src} layout="fill" draggable="false" />
              </S.MosaicItem>
            );
          })}
        </S.Mosaic>
      )}
    </S.Container>
  );
};
