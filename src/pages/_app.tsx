import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { globalStyles } from "styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <SessionProvider>
      <Component {...pageProps} />{" "}
    </SessionProvider>
  );
}

export default MyApp;
