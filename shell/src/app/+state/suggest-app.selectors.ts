import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SUGGEST_APP_FEATURE_KEY,
  SuggestAppState,
  suggestAppAdapter,
} from './suggest-app.reducer';

// Lookup the 'SuggestApp' feature state managed by NgRx
export const selectSuggestAppState = createFeatureSelector<SuggestAppState>(
  SUGGEST_APP_FEATURE_KEY
);

const { selectAll, selectEntities } = suggestAppAdapter.getSelectors();

export const selectSuggestAppLoaded = createSelector(
  selectSuggestAppState,
  (state: SuggestAppState) => state.loaded
);

export const selectSuggestAppError = createSelector(
  selectSuggestAppState,
  (state: SuggestAppState) => state.error
);

export const selectAllSuggestApp = createSelector(
  selectSuggestAppState,
  (state: SuggestAppState) => selectAll(state)
);

export const selectSuggestAppEntities = createSelector(
  selectSuggestAppState,
  (state: SuggestAppState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectSuggestAppState,
  (state: SuggestAppState) => state.selectedId
);

export const selectEntity = createSelector(
  selectSuggestAppEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
