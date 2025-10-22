import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCriticalState from './critical-state.reducer';

export const selectCriticalStateState = createFeatureSelector<fromCriticalState.State>(
  fromCriticalState.criticalStateFeatureKey
);
