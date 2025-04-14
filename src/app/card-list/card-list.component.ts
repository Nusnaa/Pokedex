import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from './card-list.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() pokemons!: Pokemon[];
  private _snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);

  toggleFavourite(pokemon: Pokemon) {
    pokemon.Favourite = !pokemon.Favourite;
    localStorage.setItem(
      'favourites',
      JSON.stringify(this.pokemons.filter((pokemon) => pokemon.Favourite))
    );
    this._snackBar.open(`${pokemon.Name} is added to your favourite list`);
  }

  openDialog(pokemon: Pokemon) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: pokemon,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed', result);
      if (result !== undefined) {
        // (un)set favourite?
      }
    });
  }
}
