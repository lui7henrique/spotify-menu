import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ClapSpinner, WaveSpinner } from "react-spinners-kit";
import styled from "styled-components";

import { globalStyles } from "styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  globalStyles();

  if (isLoading) {
    setTimeout(() => {
      setIsLoading((prevIsLoading) => !prevIsLoading);
    }, 800);

    return (
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#121212",
        }}
      >
        <WaveSpinner color="#1ed760" size={50} />
      </main>
    );
  }

  if (!isLoading) {
    return (
      <SessionProvider>
        <Component {...pageProps} />{" "}
      </SessionProvider>
    );
  }
}

export default MyApp;
