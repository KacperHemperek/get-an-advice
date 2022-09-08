import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Manrope', sans-serif;
    display: grid;
    place-items: center;
    font-size: 28px;
    background-color: ${({ theme }) => theme.neutral.darkBlue};
    min-height: 100vh;
    min-width: 100vw;
  }
`;
