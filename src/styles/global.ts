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


  @media (max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }  
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  h1,h2,h3,h4,p,a {
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {font-weight: 700;}
  h2, h3 {font-weight: 600;}

  span {font-weight: 300;}

  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  input, select {
    color: ${({ theme }) => theme.colors.text};
  }
`;
