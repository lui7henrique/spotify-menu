import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.gray100};
    font-family: 'Raleway', sans-serif;
  }

  html, body, #__next {
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.gray50};
  }

  p {
    color: ${({ theme }) => theme.colors.gray100}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray100};
  }

  *::-webkit-scrollbar {
    width: 3px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray800};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray700};
    border: 3px solid ${({ theme }) => theme.colors.gray700};
    
    border-radius: 0px;
    width: 5px;
   
  }  
`;
