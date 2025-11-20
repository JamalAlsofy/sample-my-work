import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
    { path: '', component: RemoteEntry },
    {
        path: 'product-cards',
        loadComponent: () =>
            import('../product-cards/product-cards.component').then((m) => m.ProductCardsComponent),
        data: { breadcrumb: 'Samples of My Apps' },
    },
    {
        path: 'product-table',
        loadComponent: () =>
            import('../product-table/product-table.component').then((m) => m.ProductTableComponent),
        data: { breadcrumb: 'Samples of My Apps' },
    },

];
