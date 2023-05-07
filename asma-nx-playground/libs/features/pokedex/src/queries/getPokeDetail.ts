import { gql } from '@apollo/client';

export const GET_POKEMON_DETAIL = gql`

query GetPokemon($pokemon: PokemonEnum!, $number: Int!) {
  getPokemon(pokemon: $pokemon) {
    key
    abilities {
      first {
        key
        desc
      }
    }
    color
    height
    weight
    gender {
      female
      male
    }
  
    types {
      name
    }
    
    sprite
  }
  getPokemonByDexNumber(number: $number) {
    baseStats {
      attack
      defense
      hp
      specialattack
      specialdefense
      speed
    }
  }
}
`;
