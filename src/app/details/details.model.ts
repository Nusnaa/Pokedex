import { Pokemon } from '../card-list/card-list.model';

export interface PokemonDetails extends Pokemon {
  Description?: string;
}
