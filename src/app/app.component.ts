import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  menuOptions = [
    { Name: 'Pokédex', Router: '' },
    { Name: 'My favourites', Router: 'favourites' },
  ];
  currentOption = this.menuOptions[0];
}
