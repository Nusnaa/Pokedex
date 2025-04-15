import { Pokemon } from '../card-list/card-list.model';

export interface PokemonDetails extends Pokemon {
  Description?: string;
  Stats?: Stat[];
  Types?: string[];
  Moves?: string[];
}

export interface Stat {
  BaseStat: number;
  Name: string;
}
