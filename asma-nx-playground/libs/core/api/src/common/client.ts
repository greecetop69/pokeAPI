import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface initializeCLientProps {
  link: string;
  token?: string;
}

const createAuthLink = (token: string) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });
};

export const initializeApolloClient = (config: initializeCLientProps) => {
  const { link, token } = config;
  const httpLink = createHttpLink({ uri: link });
  const authLink = token ? createAuthLink(token).concat(httpLink) : httpLink;
  return new ApolloClient({ cache: new InMemoryCache(), link: authLink });
};
