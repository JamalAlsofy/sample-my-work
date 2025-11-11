import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromSuggestApp from './+state/suggest-app.reducer';
import { SuggestAppEffects } from './+state/suggest-app.effects';
import { SuggestAppFacade } from './+state/suggest-app.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(SuggestAppEffects),
    provideState(
      fromSuggestApp.SUGGEST_APP_FEATURE_KEY,
      fromSuggestApp.suggestAppReducer
    ),
    SuggestAppFacade,
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
