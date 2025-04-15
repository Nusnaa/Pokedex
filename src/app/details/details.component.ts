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
import { DetailsService } from './details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(private detailsService: DetailsService) {}

  private _snackBar = inject(MatSnackBar);

  readonly dialogRef = inject(MatDialogRef<DetailsComponent>);
  readonly data = inject<Pokemon>(MAT_DIALOG_DATA);

  pokemon: PokemonDetails = this.data;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.detailsService.getPokemonById(this.pokemon).subscribe((result) => {
        this.pokemon = result;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe);
  }

  toggleFavourite() {
    this.data.Favourite = !this.data.Favourite;
    const snackbarText = `${this.data.Name} is ${
      this.data.Favourite ? 'added to' : 'removed from'
    } your favourite list`;
    this._snackBar.open(snackbarText, '', { duration: 5000 });
  }
}
