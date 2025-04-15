import { PokemonDetails, Stat } from './details.model';

export const convertPokemonDetails = (result: any): Partial<PokemonDetails> => {
  return {
    Description: result['flavor_text_entries'][0]['flavor_text'],
  };
};

export const convertPokemonStats = (result: any): Partial<PokemonDetails> => {
  return {
    Stats: result['stats'].map((stat: any) => convertStat(stat)),
    Types: result['types'].map((type: any) => type['type']['name']),
    Moves: result['moves']
      .map((move: any) => move['move']['name'])
      .slice(0, 15),
  };
};

const convertStat = (stat: any): Stat => {
  return {
    BaseStat: stat['base_stat'],
    Name: stat['stat']['name'],
  };
};
