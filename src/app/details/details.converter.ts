import { Pokemon } from '../card-list/card-list.model';
import { PokemonDetails } from './details.model';

export const convertPokemonDetails = (
  result: any,
  pokemon: Pokemon
): PokemonDetails => {
  return {
    ...pokemon,
    Description: result['flavor_text_entries'][0]['flavor_text'],
  };
};
