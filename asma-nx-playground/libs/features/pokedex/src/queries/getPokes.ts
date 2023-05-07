import { gql } from '@apollo/client';

export const GET_POKEMON = gql`

query GetAllPokemon($offset: Int, $take: Int, $offsetFlavorTexts: Int) {
  getAllPokemon(offset: $offset, take: $take, offsetFlavorTexts: $offsetFlavorTexts) {
    key
    sprite
    types {
      name
    }
  }
}
`;
