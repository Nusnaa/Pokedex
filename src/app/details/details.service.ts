import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { PokemonDetails } from './details.model';
import { HttpClient } from '@angular/common/http';
import {
  convertPokemonDetails,
  convertPokemonStats as convertPokemonStatsTypesAndMoves,
} from './details.converter';
import { Pokemon } from '../card-list/card-list.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private http = inject(HttpClient);

  getPokemonById(pokemon: Pokemon): Observable<PokemonDetails> {
    const getPokemonDescription = this.http.get<any>(
      'https://pokeapi.co/api/v2/pokemon-species/' + pokemon.Id
    );
    const getText = this.http.get<any>(
      'https://pokeapi.co/api/v2/pokemon/' + pokemon.Id
    );

    return forkJoin([getPokemonDescription, getText]).pipe(
      map(([description, stats]) => ({
        ...pokemon,
        ...convertPokemonDetails(description),
        ...convertPokemonStatsTypesAndMoves(stats),
      }))
    );
  }
}
