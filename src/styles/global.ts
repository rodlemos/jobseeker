import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html:focus-within {
  scroll-behavior: smooth;
  }

  h1,h2,h3,h4,p,a {
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {font-weight: 700;}
  h2, h3 {font-weight: 500;}

  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  input, select {color: ${({ theme }) => theme.colors.text};}
  body {display: flex;} 

  html, body {
    height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  `;
