// import { Route } from '@angular/router';

// export const appRoutes: Route[] = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./home/home.routes').then((m) => m.homeRoutes),
//   },
// ];
// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./product-table/product-table.component').then(m => m.ProductTableComponent)
  },
  {
    path: 'store',
    loadComponent: () => import('./product-cards/product-cards.component').then(m => m.ProductCardsComponent)
  },
  {
    path: 'product-cards',
    loadComponent: () =>
      import('./product-cards/product-cards.component').then((m) => m.ProductCardsComponent),
    data: { breadcrumb: 'Home' },
  },
  {
    path: '',
    loadComponent: () =>
      import('./home/home').then((m) => m.Home),
    data: { breadcrumb: 'Samples of My Apps' },
  },
  {
    path: 'product-table',
    loadComponent: () =>
      import('./product-table/product-table.component').then((m) => m.ProductTableComponent),
    data: { breadcrumb: 'Samples of My Apps' },
  },
];