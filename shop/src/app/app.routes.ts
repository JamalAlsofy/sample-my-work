
import { Route } from '@angular/router';
import { Cardmenu } from './cardmenu/cardmenu';

export const appRoutes: Route[] = [

  { path: '', component:Cardmenu },

  {
    path: 'product-cards',
    loadComponent: () =>
      import('./product-cards/product-cards.component').then((m) => m.ProductCardsComponent),
    data: { breadcrumb: 'Samples of My Apps' },
  },
  {
    path: 'product-table',
    loadComponent: () =>
      import('./product-table/product-table.component').then((m) => m.ProductTableComponent),
    data: { breadcrumb: 'Samples of My Apps' },
  },
];
