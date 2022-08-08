import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { client } from '../lib/apollo';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
