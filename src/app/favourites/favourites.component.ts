import { Component, OnInit } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { Pokemon } from '../card-list/card-list.model';
import { FavouritesService } from './favourites.service';

@Component({
  selector: 'app-favourites',
  imports: [CardListComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent implements OnInit {
  constructor(private favouritesService: FavouritesService) {}

  pokemons: Pokemon[] = [];
  originalPokemons!: Pokemon[];

  ngOnInit() {
    this.pokemons = this.favouritesService.getSavedPokemons();
    this.originalPokemons = this.pokemons;
  }

  onSearch(text: string) {
    if (text) {
      this.pokemons = this.originalPokemons.filter(
        (pokemon) => pokemon.Id === text || pokemon.Name === text
      );
    } else {
      this.pokemons = this.originalPokemons;
    }
  }
}
