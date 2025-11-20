import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{
    path: '', component: RemoteEntry,
},
 {
 path: 'merchant-profile',
        loadComponent: () =>
            import('../merchant-profile/merchant-profile').then((m) => m.MerchantProfile),
        data: { breadcrumb: 'Samples of My Apps' },
    },
    {
        path: 'merchant-shop-info',
        loadComponent: () =>
            import('../merchant-shop-info/merchant-shop-info').then((m) => m.MerchantShopInfo),
        data: { breadcrumb: 'Samples of My Apps' },
    },
    {
        path: 'merchant-products',
        loadComponent: () =>
            import('../merchant-products/merchant-products').then((m) => m.MerchantProducts),
        data: { breadcrumb: 'Samples of My Apps' },
    },
    {
        path: 'merchant-activety',
        loadComponent: () =>
            import('../merchant-activety/merchant-activety').then((m) => m.MerchantActivety),
        data: { breadcrumb: 'Samples of My Apps' },
    },
];