import { Pokemon } from '../card-list/card-list.model';

export const convertPokemonList = (list: any): Pokemon[] => {
  return list['results'].map((pokemon: any) => convertPokemon(pokemon));
};

export const convertPokemon = (pokemon: any): Pokemon => {
  return {
    Id: pokemon['id'] || pokemon['url']?.split('/')?.at(-2),
    Name: pokemon['name'],
    Url: pokemon['url'],
    Favourite: false,
  };
};
