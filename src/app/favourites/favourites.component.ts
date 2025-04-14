import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { Observable, Subscription } from 'rxjs';
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

  ngOnInit() {
    this.pokemons = this.favouritesService.getSavedPokemons();
  }
}
