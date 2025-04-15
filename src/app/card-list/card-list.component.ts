import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from './card-list.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-list',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  private _snackBar = inject(MatSnackBar);

  @Input() pokemons!: Pokemon[];
  @Output() onSearch = new EventEmitter<string>();

  readonly dialog = inject(MatDialog);

  originalPokemons!: Pokemon[];
  searchText!: string;

  toggleFavourite(pokemon: Pokemon) {
    pokemon.Favourite = !pokemon.Favourite;
    localStorage.setItem(
      'favourites',
      JSON.stringify(this.pokemons.filter((pokemon) => pokemon.Favourite))
    );
    const snackbarText = `${pokemon.Name} is ${
      pokemon.Favourite ? 'added to' : 'removed from'
    } your favourite list`;
    this._snackBar.open(snackbarText, '', { duration: 5000 });
  }

  openDialog(pokemon: Pokemon) {
    this.dialog.open(DetailsComponent, {
      data: pokemon,
    });
  }

  search() {
    this.onSearch.next(this.searchText);
  }
}
