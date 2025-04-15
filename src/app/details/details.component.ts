import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Pokemon } from '../card-list/card-list.model';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonDetails, Stat } from './details.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DetailsService } from './details.service';
import { Subscription } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatChipsModule,
  ],
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

  getBaseStatValue(stat: Stat): number {
    return (stat.BaseStat / this.getStatMaxValue(stat.Name)) * 100;
  }

  getBaseStatTooltip(stat: Stat): string {
    return `${stat.BaseStat}/${this.getStatMaxValue(stat.Name)}`;
  }

  private getStatMaxValue(statName: string): number {
    switch (statName) {
      case 'hp':
      case 'defense':
      case 'special-defense':
        return 200;
      case 'attack':
      case 'special-attack':
      case 'speed':
        return 150;
      default:
        return 300;
    }
  }
}
