import { Pokemon } from '../card-list/card-list.model';

export const convertPokemonList = (list: any): Pokemon[] => {
  return list['results'].map((pokemon: any) => convertPokemon(pokemon));
};

export const convertPokemon = (pokemon: any): Pokemon => {
  const id = pokemon['id'] || pokemon['url']?.split('/')?.at(-2);
  return {
    Id: id,
    Name: pokemon['name'],
    Favourite: false,
    Image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  };
};
