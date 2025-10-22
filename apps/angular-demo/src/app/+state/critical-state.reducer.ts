import { createFeature, createReducer, on } from '@ngrx/store';
import { CriticalStateActions } from './critical-state.actions';

export const criticalStateFeatureKey = 'criticalState';

export interface State {
  state: boolean ;
}

export const initialState: any = {

};

export const reducer = createReducer(
  initialState,
  on(CriticalStateActions.cariticalCriticalStates, state => state),

);

export const criticalStateFeature = createFeature({
  name: criticalStateFeatureKey,
  reducer,
});

