import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as SuggestAppActions from './suggest-app.actions';
import * as SuggestAppFeature from './suggest-app.reducer';
import * as SuggestAppSelectors from './suggest-app.selectors';

@Injectable()
export class SuggestAppFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SuggestAppSelectors.selectSuggestAppLoaded));
  allSuggestApp$ = this.store.pipe(
    select(SuggestAppSelectors.selectAllSuggestApp)
  );
  selectedSuggestApp$ = this.store.pipe(
    select(SuggestAppSelectors.selectEntity)
  );

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SuggestAppActions.initSuggestApp());
  }
}
