import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";

import { PlayerContextProvider } from "contexts/PlayerContext";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "styles/global";
import theme from "styles/theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PlayerContextProvider>
        <SessionProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />

            <NextNProgress
              color="#1ed760"
              startPosition={0.3}
              stopDelayMs={200}
              height={2}
              showOnShallow={true}
            />

            <Component {...pageProps} />
          </ThemeProvider>
        </SessionProvider>
      </PlayerContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
