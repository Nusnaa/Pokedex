import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { Subscription } from 'rxjs';
import { Pokemon } from '../card-list/card-list.model';
import { FrontpageService } from './frontpage.service';
import { FavouritesService } from '../favourites/favourites.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-frontpage',
  imports: [CardListComponent, InfiniteScrollDirective],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css',
})
export class FrontpageComponent implements OnInit, OnDestroy {
  constructor(
    private frontpageService: FrontpageService,
    private favouritesService: FavouritesService
  ) {}

  pokemons: Pokemon[] = [];
  originalPokemons!: Pokemon[];
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.frontpageService.getPokemonByInterval().subscribe((pokemons) => {
        this.pokemons = [...this.pokemons, ...pokemons];
        this.originalPokemons = this.pokemons;
        this.setFavourites();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe);
  }

  onScroll() {
    this.subscriptions.push(
      this.frontpageService.getNextPokemon().subscribe((nextPokemons) => {
        this.pokemons = [...this.pokemons, ...nextPokemons];
        this.originalPokemons = this.pokemons;
        this.setFavourites();
      })
    );
  }

  setFavourites() {
    const favourites = this.favouritesService.getSavedPokemons();
    favourites.forEach((favourite) => {
      const match = this.pokemons.find(
        (pokemon) => pokemon.Id === favourite.Id
      );
      if (match) {
        match.Favourite = true;
      }
    });
  }

  onSearch(text: string) {
    if (text) {
      this.subscriptions.push(
        this.frontpageService.getPokemonByText(text).subscribe((result) => {
          this.pokemons = [result];
          this.setFavourites();
        })
      );
    } else {
      this.pokemons = this.originalPokemons;
    }
  }
}
