import { PlayerContextProvider } from "contexts/PlayerContext";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "styles/global";
import theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <NextNProgress
            color="#1ed760"
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
            showOnShallow={true}
          />

          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </PlayerContextProvider>
  );
}

export default MyApp;
