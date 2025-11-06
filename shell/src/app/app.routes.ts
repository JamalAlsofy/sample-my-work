import { Cardmenu } from './cardmenu/cardmenu'
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shop',
    loadChildren: () => import('shop/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'merchant',
    loadChildren: () => import('merchant/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'store',
    loadChildren: () => import('store/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: Cardmenu,
  },
];
