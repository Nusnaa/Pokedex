import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Pokemon } from '../card-list/card-list.model';
import { convertPokemonList } from './frontpage.converter';

@Injectable({
  providedIn: 'root',
})
export class FrontpageService {
  private http = inject(HttpClient);

  nextUrl!: string;

  getPokemonByInterval(): Observable<Pokemon[]> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0')
      .pipe(
        tap((result) => (this.nextUrl = result['next'])),
        map((result) => convertPokemonList(result))
      );
  }

  getNextPokemon(): Observable<Pokemon[]> {
    if (!this.nextUrl) {
      return of([]);
    }
    return this.http.get<any>(this.nextUrl).pipe(
      tap((result) => (this.nextUrl = result['next'])),
      map((result) => convertPokemonList(result))
    );
  }
}
