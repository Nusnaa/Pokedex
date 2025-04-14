import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Pokemon } from './card-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardListService {
  private http = inject(HttpClient);

  baseUrl = 'https://pokeapi.co/api/v2/';
  urlTest = this.baseUrl + 'pokemon/';

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<any>(this.baseUrl + 'pokemon/' + id).pipe(
      tap((t) => console.log(t)),
      map((result) => ({
        Id: result['id'],
        Name: result['name'],
        Url: result['url'],
        Favourite: false,
      }))
    );
  }
}
