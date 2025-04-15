import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { PokemonDetails } from './details.model';
import { HttpClient } from '@angular/common/http';
import { convertPokemonDetails } from './details.converter';
import { Pokemon } from '../card-list/card-list.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private http = inject(HttpClient);

  getPokemonById(pokemon: Pokemon): Observable<PokemonDetails> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon-species/' + pokemon.Id)
      .pipe(map((result) => convertPokemonDetails(result, pokemon)));
  }
}
