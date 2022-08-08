import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.GRAPHCMS_API,
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_AUTH}`,
  },
  cache: new InMemoryCache(),
});
