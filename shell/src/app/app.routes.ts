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
    path: 'card-menu',
    loadComponent: () =>
      import('./home/home').then((m) => m.Home),
    data: { breadcrumb: 'Home' },
  },
  {
    path: '',
    loadComponent: () =>
      import('./cardmenu/cardmenu').then((m) => m.Cardmenu),
    data: { breadcrumb: 'Samples of My Apps' },
  },
  {
    path: 'add-suggested-apps',
    loadComponent: () =>
      import('./add-suggested-apps/add-suggested-apps').then((m) => m.AddSuggestedApps),
    data: { breadcrumb: 'Samples of My Apps' },
  },
];
