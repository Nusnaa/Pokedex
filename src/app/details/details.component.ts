import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Pokemon } from '../card-list/card-list.model';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonDetails } from './details.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DetailsComponent>);
  readonly data = inject<Pokemon>(MAT_DIALOG_DATA);
  private _snackBar = inject(MatSnackBar);

  pokemon: PokemonDetails = this.data;

  ngOnInit() {
    console.log(this.pokemon);
  }

  toggleFavourite(pokemon: Pokemon) {
    pokemon.Favourite = !pokemon.Favourite;
    this._snackBar.open(`${pokemon.Name} is added to your favourite list`);
  }
}
