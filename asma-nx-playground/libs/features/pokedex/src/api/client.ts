import { initializeApolloClient } from '@core/api';

const config = {
    link: 'https://graphqlpokemon.favware.tech/v7',
};

export const client = initializeApolloClient(config);
