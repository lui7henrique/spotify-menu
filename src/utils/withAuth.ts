import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { getToken } from "next-auth/jwt";
import { spotify } from "services/spotify";

const secret = process.env.JWT_SECRET;

export function withAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const token = await getToken({ req: ctx.req, secret });

    if (token) {
      spotify.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token.accessToken}`;
    }

    try {
      return await fn(ctx);
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
}
