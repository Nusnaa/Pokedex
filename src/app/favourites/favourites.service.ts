import { Injectable } from '@angular/core';
import { Pokemon } from '../card-list/card-list.model';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  getSavedPokemons(): Pokemon[] {
    if (typeof window !== 'undefined') {
      const savedFavourites = localStorage.getItem('favourites');
      return savedFavourites ? JSON.parse(savedFavourites.toString()) : [];
    }
    return [];
  }
}
