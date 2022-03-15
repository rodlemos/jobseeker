import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  h1 {font-weight: 700}
  h2, h3 {font-weight: 500}
  input, select {color: ${({ theme }) => theme.colors.text}}
  body {display: flex;} 

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  `;
