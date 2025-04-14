import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FavouritesComponent } from './favourites/favourites.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
    title: 'Front Page',
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
    title: 'My Favourites',
  },
];
